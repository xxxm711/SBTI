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
  assert.match(js, /langSwitcher/);
});
