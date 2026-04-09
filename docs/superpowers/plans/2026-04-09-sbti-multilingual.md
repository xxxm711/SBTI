# SBTI Multilingual (zh-CN/en/es) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete three-language SBTI experience (zh-CN, en, es) with browser-language defaulting, in-session language switching, and full text coverage (UI, questions, results, dimensions, author content).

**Architecture:** Keep the existing single-page static app and refactor text into language catalogs. Preserve scoring/matching logic and image assets, and drive rendering through one runtime `app.lang` state. Use pure utility functions for language resolution/fallback and parity tests to prevent data drift.

**Tech Stack:** HTML5, vanilla JavaScript (ES modules), CSS, Node.js built-in test runner (`node:test`).

---

## File Structure (Responsibilities)

- Create: `i18n_utils.mjs` - pure language helpers (`resolveLang`, fallback read helpers, visible-question helper)
- Create: `i18n_catalog.mjs` - all multilingual text catalogs (UI, questions, specials, type text, dimension text)
- Create: `tests/i18n_utils.test.mjs` - unit tests for language resolution and fallback behavior
- Create: `tests/i18n_catalog_parity.test.mjs` - parity tests for question/type/dimension key consistency across languages
- Create: `tests/index_language_switcher.test.mjs` - static test for HTML language switcher and script/css references
- Create: `tests/main_i18n_wiring.test.mjs` - static wiring test that `sbti_main.js` imports catalog/utils and exposes language switching hooks
- Modify: `index.html` - add language switcher UI and ensure it points to existing assets
- Modify: `sbti_main.css` - add language switcher layout/styles and responsive behavior
- Modify: `sbti_main.js` - import i18n modules, add `app.lang`, language switching, and localized rendering

---

### Task 1: Build and test i18n utility functions

**Files:**
- Create: `i18n_utils.mjs`
- Test: `tests/i18n_utils.test.mjs`

- [ ] **Step 1: Write the failing utility tests**

```js
// tests/i18n_utils.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LANGS,
  DEFAULT_LANG,
  resolveLang,
  getI18nValue,
  buildVisibleQuestions
} from '../i18n_utils.mjs';

test('constants are stable', () => {
  assert.deepEqual(LANGS, ['zh-CN', 'en', 'es']);
  assert.equal(DEFAULT_LANG, 'zh-CN');
});

test('resolveLang maps browser locales correctly', () => {
  assert.equal(resolveLang('zh-CN'), 'zh-CN');
  assert.equal(resolveLang('zh-TW'), 'zh-CN');
  assert.equal(resolveLang('es-MX'), 'es');
  assert.equal(resolveLang('en-US'), 'en');
  assert.equal(resolveLang('fr-FR'), 'en');
  assert.equal(resolveLang(''), 'zh-CN');
});

test('getI18nValue falls back to zh-CN for missing key', () => {
  const dict = {
    'zh-CN': { ui: { title: '中文标题' } },
    en: { ui: {} },
    es: { ui: {} }
  };

  assert.equal(getI18nValue(dict, 'en', ['ui', 'title']), '中文标题');
  assert.equal(getI18nValue(dict, 'es', ['ui', 'title']), '中文标题');
});

test('buildVisibleQuestions inserts drink trigger only when gate=3', () => {
  const base = [{ id: 'q1' }, { id: 'drink_gate_q1' }, { id: 'q2' }];
  const specials = [
    { id: 'drink_gate_q1' },
    { id: 'drink_gate_q2' }
  ];

  const withTrigger = buildVisibleQuestions(base, specials, { drink_gate_q1: 3 });
  const withoutTrigger = buildVisibleQuestions(base, specials, { drink_gate_q1: 1 });

  assert.deepEqual(withTrigger.map(x => x.id), ['q1', 'drink_gate_q1', 'drink_gate_q2', 'q2']);
  assert.deepEqual(withoutTrigger.map(x => x.id), ['q1', 'drink_gate_q1', 'q2']);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/i18n_utils.test.mjs`

Expected: FAIL with `Cannot find module '../i18n_utils.mjs'`

- [ ] **Step 3: Write minimal utility implementation**

```js
// i18n_utils.mjs
export const LANGS = ['zh-CN', 'en', 'es'];
export const DEFAULT_LANG = 'zh-CN';

export function resolveLang(rawLang = '') {
  const normalized = String(rawLang || '').toLowerCase();
  if (!normalized) return DEFAULT_LANG;
  if (normalized.startsWith('zh')) return 'zh-CN';
  if (normalized.startsWith('es')) return 'es';
  if (normalized.startsWith('en')) return 'en';
  return 'en';
}

export function getI18nValue(dict, lang, keyPath) {
  const walk = (obj, keys) => keys.reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
  const direct = walk(dict?.[lang], keyPath);
  if (direct !== undefined) return direct;
  return walk(dict?.[DEFAULT_LANG], keyPath);
}

export function buildVisibleQuestions(shuffledQuestions, specialQuestions, answers) {
  const visible = [...shuffledQuestions];
  const gateIndex = visible.findIndex(q => q.id === 'drink_gate_q1');
  if (gateIndex !== -1 && answers?.drink_gate_q1 === 3) {
    visible.splice(gateIndex + 1, 0, specialQuestions[1]);
  }
  return visible;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/i18n_utils.test.mjs`

Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add i18n_utils.mjs tests/i18n_utils.test.mjs
git commit -m "test: add i18n utility coverage and helpers"
```

---

### Task 2: Create multilingual catalogs and parity tests

**Files:**
- Create: `i18n_catalog.mjs`
- Test: `tests/i18n_catalog_parity.test.mjs`

- [ ] **Step 1: Write failing parity tests**

```js
// tests/i18n_catalog_parity.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  UI_TEXT,
  QUESTION_SETS,
  SPECIAL_QUESTION_SETS,
  TYPE_LIBRARY_I18N,
  DIMENSION_META_I18N,
  DIM_EXPLANATIONS_I18N
} from '../i18n_catalog.mjs';

const LANGS = ['zh-CN', 'en', 'es'];

test('all language roots exist', () => {
  for (const lang of LANGS) {
    assert.ok(UI_TEXT[lang]);
    assert.ok(QUESTION_SETS[lang]);
    assert.ok(SPECIAL_QUESTION_SETS[lang]);
    assert.ok(TYPE_LIBRARY_I18N[lang]);
    assert.ok(DIMENSION_META_I18N[lang]);
    assert.ok(DIM_EXPLANATIONS_I18N[lang]);
  }
});

test('question ids and option values stay aligned across languages', () => {
  const zh = QUESTION_SETS['zh-CN'];
  assert.equal(zh.length, 30);

  for (const lang of ['en', 'es']) {
    assert.equal(QUESTION_SETS[lang].length, zh.length);
    zh.forEach((q, i) => {
      const other = QUESTION_SETS[lang][i];
      assert.equal(other.id, q.id);
      assert.equal(other.dim, q.dim);
      assert.deepEqual(other.options.map(x => x.value), q.options.map(x => x.value));
    });
  }
});

test('special question ids and values stay aligned', () => {
  const zh = SPECIAL_QUESTION_SETS['zh-CN'];
  assert.equal(zh.length, 2);

  for (const lang of ['en', 'es']) {
    assert.equal(SPECIAL_QUESTION_SETS[lang].length, zh.length);
    zh.forEach((q, i) => {
      const other = SPECIAL_QUESTION_SETS[lang][i];
      assert.equal(other.id, q.id);
      assert.deepEqual(other.options.map(x => x.value), q.options.map(x => x.value));
    });
  }
});

test('type and dimension keys stay aligned', () => {
  const zhTypeKeys = Object.keys(TYPE_LIBRARY_I18N['zh-CN']).sort();
  const zhDimKeys = Object.keys(DIMENSION_META_I18N['zh-CN']).sort();

  for (const lang of ['en', 'es']) {
    assert.deepEqual(Object.keys(TYPE_LIBRARY_I18N[lang]).sort(), zhTypeKeys);
    assert.deepEqual(Object.keys(DIMENSION_META_I18N[lang]).sort(), zhDimKeys);
    assert.deepEqual(Object.keys(DIM_EXPLANATIONS_I18N[lang]).sort(), zhDimKeys);
  }
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/i18n_catalog_parity.test.mjs`

Expected: FAIL with `Cannot find module '../i18n_catalog.mjs'`

- [ ] **Step 3: Implement multilingual catalog module**

```js
// i18n_catalog.mjs
// NOTE: Keep IDs/values exactly aligned across languages.
// 1) Move existing zh-CN content from sbti_main.js constants into these zh-CN branches.
// 2) Add complete en/es translations for every text field.

export const UI_TEXT = {
  'zh-CN': {
    pageTitle: 'SBTI 人格测试',
    start: '开始测试',
    backHome: '返回首页',
    submit: '提交并查看结果',
    restart: '重新测试',
    toTop: '回到首页',
    authorTitle: '作者的话'
  },
  en: {
    pageTitle: 'SBTI Personality Test',
    start: 'Start Test',
    backHome: 'Back to Home',
    submit: 'Submit & View Result',
    restart: 'Retake Test',
    toTop: 'Back to Home',
    authorTitle: 'Author Notes'
  },
  es: {
    pageTitle: 'Test de Personalidad SBTI',
    start: 'Comenzar test',
    backHome: 'Volver al inicio',
    submit: 'Enviar y ver resultado',
    restart: 'Repetir test',
    toTop: 'Volver al inicio',
    authorTitle: 'Nota de la autora'
  }
};

export const QUESTION_SETS = {
  'zh-CN': [/* full 30-question dataset from current file */],
  en: [/* full 30-question translated dataset with same ids/dims/values */],
  es: [/* full 30-question translated dataset with same ids/dims/values */]
};

export const SPECIAL_QUESTION_SETS = {
  'zh-CN': [/* drink_gate_q1, drink_gate_q2 in zh */],
  en: [/* drink_gate_q1, drink_gate_q2 in en */],
  es: [/* drink_gate_q1, drink_gate_q2 in es */]
};

export const TYPE_LIBRARY_I18N = {
  'zh-CN': { /* full type text set keyed by code */ },
  en: { /* full translated type text set keyed by same code */ },
  es: { /* full translated type text set keyed by same code */ }
};

export const DIMENSION_META_I18N = {
  'zh-CN': { /* S1..So3 names/models */ },
  en: { /* translated */ },
  es: { /* translated */ }
};

export const DIM_EXPLANATIONS_I18N = {
  'zh-CN': { /* S1..So3 => {L,M,H} */ },
  en: { /* translated */ },
  es: { /* translated */ }
};
```

- [ ] **Step 4: Run parity tests to verify they pass**

Run: `node --test tests/i18n_catalog_parity.test.mjs`

Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add i18n_catalog.mjs tests/i18n_catalog_parity.test.mjs
git commit -m "feat: add zh/en/es i18n catalogs with parity guards"
```

---

### Task 3: Add language switcher markup and responsive styling

**Files:**
- Modify: `index.html`
- Modify: `sbti_main.css`
- Test: `tests/index_language_switcher.test.mjs`

- [ ] **Step 1: Write failing static HTML test**

```js
// tests/index_language_switcher.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');

test('index includes language switcher and correct assets', () => {
  assert.match(html, /id="langSwitcher"/);
  assert.match(html, /data-lang="zh-CN"/);
  assert.match(html, /data-lang="en"/);
  assert.match(html, /data-lang="es"/);
  assert.match(html, /href="\.\/sbti_main\.css"/);
  assert.match(html, /type="module"\s+src="\.\/sbti_main\.js"/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/index_language_switcher.test.mjs`

Expected: FAIL (missing `langSwitcher` and/or asset references)

- [ ] **Step 3: Implement language switcher HTML + CSS**

```html
<!-- index.html (inside <body>, before .shell) -->
<header class="app-header">
  <div class="lang-switcher" id="langSwitcher" aria-label="Language switcher">
    <button type="button" class="lang-btn" data-lang="zh-CN">中文</button>
    <button type="button" class="lang-btn" data-lang="en">EN</button>
    <button type="button" class="lang-btn" data-lang="es">ES</button>
  </div>
</header>

<!-- index.html <head> and bottom script -->
<link rel="stylesheet" href="./sbti_main.css">
<script type="module" src="./sbti_main.js"></script>
```

```css
/* sbti_main.css */
.app-header {
  max-width: 980px;
  margin: 0 auto;
  padding: 12px 16px 0;
  display: flex;
  justify-content: flex-end;
}

.lang-switcher {
  display: inline-flex;
  gap: 8px;
  padding: 6px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(47, 73, 55, 0.08);
}

.lang-btn {
  border: 1px solid transparent;
  background: transparent;
  color: var(--accent-strong);
  border-radius: 999px;
  padding: 6px 12px;
  font-weight: 700;
}

.lang-btn.is-active {
  border-color: var(--line);
  background: var(--soft);
}

@media (max-width: 600px) {
  .app-header {
    padding: 10px 12px 0;
  }

  .lang-btn {
    padding: 6px 10px;
    font-size: 12px;
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/index_language_switcher.test.mjs`

Expected: PASS (1 test)

- [ ] **Step 5: Commit**

```bash
git add index.html sbti_main.css tests/index_language_switcher.test.mjs
git commit -m "feat: add responsive language switcher shell"
```

---

### Task 4: Wire i18n runtime into `sbti_main.js`

**Files:**
- Modify: `sbti_main.js`
- Test: `tests/main_i18n_wiring.test.mjs`
- Test: `tests/i18n_utils.test.mjs`
- Test: `tests/i18n_catalog_parity.test.mjs`
- Test: `tests/index_language_switcher.test.mjs`

- [ ] **Step 1: Write failing wiring test**

```js
// tests/main_i18n_wiring.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const js = readFileSync('sbti_main.js', 'utf8');

test('main file imports i18n modules and contains language switch handlers', () => {
  assert.match(js, /from '\.\/i18n_utils\.mjs'/);
  assert.match(js, /from '\.\/i18n_catalog\.mjs'/);
  assert.match(js, /app\.lang/);
  assert.match(js, /resolveLang\(navigator\.language\)/);
  assert.match(js, /function setLanguage\(/);
  assert.match(js, /function rerenderCurrentScreen\(/);
  assert.match(js, /id='langSwitcher'|"langSwitcher"/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/main_i18n_wiring.test.mjs`

Expected: FAIL (missing imports/handlers)

- [ ] **Step 3: Refactor `sbti_main.js` for language-driven rendering**

```js
// sbti_main.js (top imports)
import { resolveLang, getI18nValue, buildVisibleQuestions } from './i18n_utils.mjs';
import {
  UI_TEXT,
  QUESTION_SETS,
  SPECIAL_QUESTION_SETS,
  TYPE_LIBRARY_I18N,
  DIMENSION_META_I18N,
  DIM_EXPLANATIONS_I18N
} from './i18n_catalog.mjs';

// app state
const app = {
  shuffledQuestions: [],
  answers: {},
  previewMode: false,
  lang: resolveLang(navigator.language)
};

function getQuestions() {
  return QUESTION_SETS[app.lang];
}

function getSpecialQuestions() {
  return SPECIAL_QUESTION_SETS[app.lang];
}

function uiText(keyPath) {
  return getI18nValue(UI_TEXT, app.lang, keyPath);
}

function setLanguage(lang) {
  app.lang = resolveLang(lang);
  syncLanguageButtons();
  rerenderCurrentScreen();
}

function rerenderCurrentScreen() {
  document.documentElement.lang = app.lang === 'zh-CN' ? 'zh-CN' : app.lang;
  document.title = uiText(['pageTitle']);

  // static labels
  document.getElementById('startBtn').textContent = uiText(['start']);
  document.getElementById('backIntroBtn').textContent = uiText(['backHome']);
  document.getElementById('submitBtn').textContent = uiText(['submit']);
  document.getElementById('restartBtn').textContent = uiText(['restart']);
  document.getElementById('toTopBtn').textContent = uiText(['toTop']);

  // screen-specific rerender
  if (screens.test.classList.contains('active')) renderQuestions();
  if (screens.result.classList.contains('active')) renderResult();
}

function getVisibleQuestions() {
  return buildVisibleQuestions(app.shuffledQuestions, getSpecialQuestions(), app.answers);
}

// keep computeResult scoring unchanged; only map final text by code + app.lang
```

- [ ] **Step 4: Run full test suite and JS syntax check**

Run: `node --test tests/i18n_utils.test.mjs tests/i18n_catalog_parity.test.mjs tests/index_language_switcher.test.mjs tests/main_i18n_wiring.test.mjs`

Expected: PASS (all tests)

Run: `node --check sbti_main.js`

Expected: no syntax errors

- [ ] **Step 5: Commit**

```bash
git add sbti_main.js tests/main_i18n_wiring.test.mjs
git commit -m "feat: wire zh/en/es runtime localization into main flow"
```

---

### Task 5: Verify full multilingual behavior manually

**Files:**
- Modify: `sbti_main.js`
- Modify: `i18n_catalog.mjs`

- [ ] **Step 1: Start local static server**

Run: `python -m http.server 4173`

Expected: `Serving HTTP on ... port 4173`

- [ ] **Step 2: Verify browser-language defaults**

Run with browser language profiles:
- `zh-CN` -> first render Chinese
- `en-US` -> first render English
- `es-ES` -> first render Spanish
- `fr-FR` -> fallback to English

Expected: default selection follows mapping rules exactly.

- [ ] **Step 3: Verify in-session switching and answer retention**

Manual checks on `/`:
1. Answer at least 5 questions in Chinese.
2. Switch to EN and ES.
3. Confirm selected radios remain selected and progress count unchanged.

Expected: answers preserved, text updates immediately, no page reload.

- [ ] **Step 4: Verify result-page multilingual coverage including special branches**

Manual checks:
1. Normal branch -> result title, badge, desc, dimensions, note, author section all translated.
2. DRUNK branch (set `drink_gate_q1=3`, `drink_gate_q2=2`) -> translated special copy visible.
3. HHHH fallback branch -> translated fallback copy visible.

Expected: no untranslated leftovers for EN/ES except intended code tokens (e.g., personality code names).

- [ ] **Step 5: Commit**

```bash
git add i18n_catalog.mjs sbti_main.js
git commit -m "chore: finalize full multilingual content and manual QA fixes"
```

---

## Plan Self-Review

- Spec coverage:
  - 3 languages + full coverage -> Task 2 + Task 4 + Task 5
  - Browser language default with fallback -> Task 1 + Task 4 + Task 5
  - Session-only switching -> Task 4 (no storage usage)
  - Preserve scoring logic -> Task 4 (logic unchanged, text source changed)
  - Responsive switcher -> Task 3
- Placeholder scan:
  - Removed TODO/TBD markers.
  - Each task includes explicit code and commands.
- Type/signature consistency:
  - `resolveLang`, `getI18nValue`, `buildVisibleQuestions` names are consistent between tests and implementation.
