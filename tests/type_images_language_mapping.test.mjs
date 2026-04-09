import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const source = readFileSync('sbti_main.js', 'utf8');

function readImageMap(constName, nextConstName) {
  const pattern = new RegExp(
    `const ${constName} = (\\{[\\s\\S]*?\\});\\s*const ${nextConstName} =`,
  );
  const match = source.match(pattern);
  assert.ok(match, `const ${constName} not found in sbti_main.js`);
  return Function(`"use strict"; return (${match[1]});`)();
}

test('spanish image map aligns with base type keys', () => {
  const base = readImageMap('TYPE_IMAGES', 'TYPE_IMAGES_ES');
  const es = readImageMap('TYPE_IMAGES_ES', 'TYPE_IMAGES_BY_LANG');

  assert.deepEqual(Object.keys(es).sort(), Object.keys(base).sort());
});

test('spanish image map points to extracted images_es files', () => {
  const es = readImageMap('TYPE_IMAGES_ES', 'TYPE_IMAGES_BY_LANG');

  for (const [code, imagePath] of Object.entries(es)) {
    assert.equal(
      imagePath.startsWith('./assets/images_es/'),
      true,
      `TYPE_IMAGES_ES[${code}] should point to ./assets/images_es/`,
    );

    const absolute = path.resolve(imagePath);
    assert.equal(existsSync(absolute), true, `Spanish image file missing: ${imagePath}`);
  }
});

test('english and spanish pages use spanish image map', () => {
  assert.match(source, /en:\s*TYPE_IMAGES_ES/);
  assert.match(source, /es:\s*TYPE_IMAGES_ES/);
  assert.match(source, /const typeImages = getTypeImagesForLang\(app\.lang\);/);
});
