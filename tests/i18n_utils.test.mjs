import test from 'node:test';
import assert from 'node:assert/strict';

import {
  LANGS,
  DEFAULT_LANG,
  resolveLang,
  getI18nValue,
  buildVisibleQuestions,
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
    es: { ui: {} },
  };

  assert.equal(getI18nValue(dict, 'en', ['ui', 'title']), '中文标题');
  assert.equal(getI18nValue(dict, 'es', ['ui', 'title']), '中文标题');
});

test('buildVisibleQuestions inserts drink trigger only when gate=3', () => {
  const base = [{ id: 'q1' }, { id: 'drink_gate_q1' }, { id: 'q2' }];
  const specials = [{ id: 'drink_gate_q1' }, { id: 'drink_gate_q2' }];

  const withTrigger = buildVisibleQuestions(base, specials, { drink_gate_q1: 3 });
  const withoutTrigger = buildVisibleQuestions(base, specials, { drink_gate_q1: 1 });

  assert.deepEqual(withTrigger.map((x) => x.id), ['q1', 'drink_gate_q1', 'drink_gate_q2', 'q2']);
  assert.deepEqual(withoutTrigger.map((x) => x.id), ['q1', 'drink_gate_q1', 'q2']);
});
