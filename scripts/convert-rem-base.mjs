/**
 * Converts rem values from 62.5% root (1rem=10px) to standard 16px root (1rem=16px).
 * newRem = oldRem * (10 / 16)
 */
import fs from 'fs';
import path from 'path';

const SRC = path.join(process.cwd(), 'src');
const REM_SCALE = 10 / 16;

function formatRem(value) {
  const rounded = Math.round(value * 10000) / 10000;
  const str = rounded.toString();
  return str.includes('.') ? str.replace(/\.?0+$/, '') : str;
}

function convertRemInContent(content) {
  return content.replace(/(\d*\.?\d+)rem/g, (match, num) => {
    const oldVal = parseFloat(num);
    if (Number.isNaN(oldVal)) return match;
    const newVal = oldVal * REM_SCALE;
    return `${formatRem(newVal)}rem`;
  });
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const files = walk(SRC);
let changed = 0;

for (const file of files) {
  const original = fs.readFileSync(file, 'utf8');
  const converted = convertRemInContent(original);
  if (converted !== original) {
    fs.writeFileSync(file, converted);
    changed++;
  }
}

console.log(`Converted rem in ${changed} files`);
