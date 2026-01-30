const { test, expect } = require('@playwright/test');
const inputs = require('./testCase');

test('Validate application handles various input types', async ({ page }) => {
  test.setTimeout(0);

  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator(
    '.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3'
  );

  const outputBox = page.locator(
    '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50'
  );

  for (const text of inputs) {
    const previousOutput = await outputBox.textContent();

    // Clear input first
    await inputBox.fill('');

    // Type input **slowly** 0.5s per character
    await inputBox.type(text, { delay: 100 });

    // Wait until translation appears
    await expect
      .poll(async () => await outputBox.textContent(), { timeout: 20000 })
      .not.toBe(previousOutput);

    // Wait 5 seconds to view output properly
    await page.waitForTimeout(5000);
  }
 
});
