import test from 'node:test';
import assert from 'node:assert/strict';

import {
  UI_TEXT,
  QUESTION_SETS,
  SPECIAL_QUESTION_SETS,
  TYPE_LIBRARY_I18N,
  DIMENSION_META_I18N,
  DIM_EXPLANATIONS_I18N,
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
      assert.deepEqual(
        other.options.map((x) => x.value),
        q.options.map((x) => x.value),
      );
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
      assert.deepEqual(
        other.options.map((x) => x.value),
        q.options.map((x) => x.value),
      );
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
