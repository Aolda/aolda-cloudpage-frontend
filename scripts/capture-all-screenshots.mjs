import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'screenshot');
const BASE = process.env.CAPTURE_BASE_URL || 'http://127.0.0.1:3000';

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 744, height: 900 },
  { name: 'mobile', width: 375, height: 812 },
];

const PAGES = [
  { key: 'home', path: '/' },
  { key: 'notice', path: '/notice' },
  { key: 'faq', path: '/faq' },
  { key: 'product', path: '/product' },
  { key: 'product-amdb', path: '/product/amdb' },
  { key: 'notice-1', path: '/notice/1' },
];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function preparePage(page) {
  await sleep(800);
  await Promise.race([
    page.evaluate(async () => {
      if (document.fonts?.ready) await document.fonts.ready;
    }),
    sleep(3000),
  ]);

  // Trigger lazy content by scrolling through the page quickly
  await page.evaluate(async () => {
    const step = Math.max(400, Math.floor(window.innerHeight * 0.8));
    const max = Math.max(
      document.documentElement.scrollHeight,
      document.body?.scrollHeight || 0
    );
    for (let y = 0; y < max; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
    window.scrollTo(0, 0);
  });
  await sleep(500);
}

async function captureOne(browser, pageDef, vp) {
  const file = `${pageDef.key}-${vp.name}.png`;
  const outPath = path.join(OUT, file);
  console.error(`START ${file} ${pageDef.path}`);

  const context = await browser.newContext({
    deviceScaleFactor: 1,
    viewport: { width: vp.width, height: vp.height },
  });
  const page = await context.newPage();
  page.setDefaultTimeout(60000);

  const url = `${BASE}${pageDef.path}`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await preparePage(page);

  // Prefer expanding viewport to full scroll height (single bitmap, no stitch tiles).
  // Cap to avoid Chromium hangs on extreme heights.
  let scrollHeight = await page.evaluate(() =>
    Math.max(
      document.documentElement.scrollHeight,
      document.body?.scrollHeight || 0
    )
  );
  scrollHeight = Math.min(Math.max(scrollHeight, vp.height), 16000);

  await page.setViewportSize({ width: vp.width, height: scrollHeight });
  await sleep(400);

  const after = await page.evaluate(() =>
    Math.max(
      document.documentElement.scrollHeight,
      document.body?.scrollHeight || 0
    )
  );
  const height = Math.min(Math.max(after, scrollHeight), 16000);
  if (height !== scrollHeight) {
    await page.setViewportSize({ width: vp.width, height });
    await sleep(300);
  }

  await page.screenshot({
    path: outPath,
    fullPage: false,
    type: 'png',
    timeout: 90000,
  });

  const box = await page.evaluate(() => ({
    iw: window.innerWidth,
    ih: window.innerHeight,
    sh: document.documentElement.scrollHeight,
    title: document.title,
  }));
  const markers = await page.evaluate(() => {
    const t = document.body?.innerText || '';
    return {
      hasAolda: /AOLDA|Aolda|아올다/.test(t),
      hasFooter: /아주대학교|회장|클라우드/.test(t),
    };
  });

  const stat = fs.statSync(outPath);
  const row = {
    file,
    path: pageDef.path,
    viewport: vp.name,
    width: vp.width,
    height,
    box,
    bytes: stat.size,
    ...markers,
  };
  console.log(JSON.stringify(row));
  console.error(`DONE ${file} ${vp.width}x${height} bytes=${stat.size}`);
  await context.close();
  return row;
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const results = [];

  try {
    for (const pageDef of PAGES) {
      for (const vp of VIEWPORTS) {
        const row = await captureOne(browser, pageDef, vp);
        results.push(row);
      }
    }
  } finally {
    await browser.close();
  }

  fs.writeFileSync(
    path.join(OUT, '_capture-summary.json'),
    JSON.stringify(results, null, 2),
    'utf8'
  );
  console.error(`ALL DONE count=${results.length} out=${OUT}`);
  if (results.length !== 18) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
