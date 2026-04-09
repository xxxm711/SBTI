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
