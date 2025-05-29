// test-fixtures.js
const { test: baseTest, chromium } = require('@playwright/test');

const test = baseTest.extend({
  // Override the 'page' fixture with a custom browser/context/page lifecycle
  page: async ({ }, use) => {
    // Launch browser in headful mode
    const isCI = process.env.CI;
    const browser = await chromium.launch({ headless: isCI ? true : false });
    const context = await browser.newContext({
      viewport: { width: 1800, height: 600 }, // set large viewport
      });
    const page = await context.newPage();

    // Provide the page to the test
    await use(page);

    // Cleanup after test
    for (const p of context.pages()) {
      if (!p.isClosed()) await p.close();
    }
    await browser.close();
  },
});

module.exports = { test };
