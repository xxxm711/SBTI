import test from 'node:test';
import assert from 'node:assert/strict';

import { QUESTION_SETS } from '../i18n_catalog.mjs';

test('q20 option C uses updated zh-CN copy', () => {
  const q20 = QUESTION_SETS['zh-CN'].find((q) => q.id === 'q20');
  assert.ok(q20, 'q20 should exist in zh-CN question set');
  assert.equal(q20.options[2].label, '我不拉了(穿裤子走人)');
});

test('q20 option C is synchronized in en/es translations', () => {
  const q20En = QUESTION_SETS.en.find((q) => q.id === 'q20');
  const q20Es = QUESTION_SETS.es.find((q) => q.id === 'q20');

  assert.ok(q20En, 'q20 should exist in en question set');
  assert.ok(q20Es, 'q20 should exist in es question set');

  assert.equal(q20En.options[2].label, "I'm done pooping (pull up pants and leave)");
  assert.equal(q20Es.options[2].label, 'Paso de cagar (me subo los pantalones y me voy)');
});
