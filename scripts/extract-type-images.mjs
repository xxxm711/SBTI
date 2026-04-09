import fs from 'node:fs';
import path from 'node:path';

const SOURCE_FILE = 'sbti_main.js';
const OUTPUT_DIR = path.join('assets', 'type-images');

function parseTypeImages(sourceText) {
  const match = sourceText.match(/const TYPE_IMAGES = (\{[\s\S]*?\});\s*const NORMAL_TYPES =/);
  if (!match) {
    throw new Error('TYPE_IMAGES block not found in sbti_main.js');
  }
  const objectText = match[1];
  const parsed = Function(`"use strict"; return (${objectText});`)();
  return { parsed, objectText };
}

function normalizeExtension(mimeSubtype) {
  const subtype = mimeSubtype.toLowerCase();
  if (subtype === 'jpeg' || subtype === 'jpg') return 'jpg';
  if (subtype.includes('svg')) return 'svg';
  if (subtype.includes('webp')) return 'webp';
  if (subtype.includes('gif')) return 'gif';
  return 'png';
}

function safeBaseName(code) {
  const cleaned = code.replace(/[^a-zA-Z0-9_-]/g, '_').replace(/_+/g, '_');
  return cleaned || 'type';
}

function writeImages(typeImages) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const usedNames = new Set();
  const mapped = {};

  for (const [code, value] of Object.entries(typeImages)) {
    if (typeof value !== 'string' || !value.startsWith('data:image/')) {
      mapped[code] = value;
      continue;
    }

    const dataMatch = value.match(/^data:image\/([^;]+);base64,(.+)$/s);
    if (!dataMatch) {
      throw new Error(`Invalid data URI for ${code}`);
    }

    const [, subtype, base64Data] = dataMatch;
    const ext = normalizeExtension(subtype);
    const base = safeBaseName(code);

    let fileName = `${base}.${ext}`;
    let counter = 2;
    while (usedNames.has(fileName)) {
      fileName = `${base}_${counter}.${ext}`;
      counter += 1;
    }
    usedNames.add(fileName);

    const filePath = path.join(OUTPUT_DIR, fileName);
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(filePath, buffer);

    mapped[code] = `./assets/type-images/${fileName}`;
  }

  return mapped;
}

function updateSource(sourceText, mappedImages) {
  const replacement = `const TYPE_IMAGES = ${JSON.stringify(mappedImages, null, 4)};\nconst NORMAL_TYPES =`;
  return sourceText.replace(/const TYPE_IMAGES = (\{[\s\S]*?\});\s*const NORMAL_TYPES =/, replacement);
}

function main() {
  const sourceText = fs.readFileSync(SOURCE_FILE, 'utf8');
  const { parsed } = parseTypeImages(sourceText);
  const mapped = writeImages(parsed);
  const updated = updateSource(sourceText, mapped);
  fs.writeFileSync(SOURCE_FILE, updated);

  const count = Object.keys(mapped).length;
  console.log(`Extracted and rewired ${count} TYPE_IMAGES entries to ${OUTPUT_DIR}`);
}

main();
