/**
 * Converts pixel values to rem (16px base) in style files.
 * Preserves 1px for hairline borders.
 */
import fs from 'fs';
import path from 'path';

const TARGET_DIRS = [
  path.join(process.cwd(), 'src/components/molecules'),
  path.join(process.cwd(), 'src/components/organisms'),
];

function formatRem(px) {
  const rem = px / 16;
  const rounded = Math.round(rem * 10000) / 10000;
  const str = rounded.toString();
  return str.includes('.') ? `${str.replace(/\.?0+$/, '')}rem` : `${rounded}rem`;
}

function convertPx(content) {
  return content.replace(/(\d+)px/g, (match, numStr) => {
    const px = parseInt(numStr, 10);
    if (px === 1) return '1px';
    return formatRem(px);
  });
}

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/style\.(ts|tsx)$/.test(entry.name)) files.push(full);
  }
  return files;
}

let changed = 0;
for (const dir of TARGET_DIRS) {
  for (const file of walk(dir)) {
    const original = fs.readFileSync(file, 'utf8');
    const converted = convertPx(original);
    if (converted !== original) {
      fs.writeFileSync(file, converted);
      changed++;
    }
  }
}

console.log(`Converted px to rem in ${changed} style files`);
