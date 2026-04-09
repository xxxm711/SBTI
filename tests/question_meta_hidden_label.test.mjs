import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const js = readFileSync('sbti_main.js', 'utf8');

test('regular question cards no longer render hidden-dimension label', () => {
  assert.match(js, /function getQuestionMetaLabel\(/);
  assert.doesNotMatch(js, /t\('questionTagHidden'\)/);
});
