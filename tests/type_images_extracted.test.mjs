import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

function readTypeImages() {
  const source = readFileSync('sbti_main.js', 'utf8');
  const match = source.match(/const TYPE_IMAGES = (\{[\s\S]*?\});\s*const TYPE_IMAGES_ES =/);
  assert.ok(match, 'TYPE_IMAGES object not found in sbti_main.js');
  return Function(`"use strict"; return (${match[1]});`)();
}

test('TYPE_IMAGES values point to extracted image files', () => {
  const images = readTypeImages();
  const entries = Object.entries(images);

  assert.ok(entries.length > 0, 'TYPE_IMAGES should not be empty');

  for (const [code, imagePath] of entries) {
    assert.equal(
      imagePath.startsWith('./assets/type-images/'),
      true,
      `TYPE_IMAGES[${code}] should point to ./assets/type-images/`,
    );
    assert.equal(
      imagePath.startsWith('data:image/'),
      false,
      `TYPE_IMAGES[${code}] should not be a data URI`,
    );

    const absolute = path.resolve(imagePath);
    assert.equal(existsSync(absolute), true, `Extracted image file missing: ${imagePath}`);
  }
});
