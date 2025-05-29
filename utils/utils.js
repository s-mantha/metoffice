async function scrollUntilVisible(locator, options = {}) {
    const {
      maxScrolls = 10,
      scrollStep = 300,
      timeout = 10000,
    } = options;
  
    const page = locator.page();
    const start = Date.now();
  
    for (let i = 0; i < maxScrolls; i++) {
      try {
        if (await locator.isVisible()) return;
      } catch (e) {
        throw new Error('Locator could not be evaluated or page closed');
      }
  
      await page.evaluate((step) => window.scrollBy(0, step), scrollStep);
      await page.waitForTimeout(300);
  
      if (Date.now() - start > timeout) {
        throw new Error('scrollUntilVisible: Timeout exceeded');
      }
    }
  
    throw new Error('scrollUntilVisible: Element never became visible');
  }
  