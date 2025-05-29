const { scrollUntilVisible } = require('../utils/utils'); // adjust path as needed

class PollenPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.pollenLink = page.getByRole('link', { name: /Pollen/i });
    this.mapLocator = page.locator('#map');
    this.regionDropdown = page.getByLabel('Choose a region');
    this.zoomInBtn = page.getByRole('button', { name: 'Zoom in' });
    this.zoomOutBtn = page.getByRole('button', { name: 'Zoom out' });
  }

  async openPollenTab() {
    await this.pollenLink.scrollIntoViewIfNeeded();
    await this.pollenLink.waitFor({ state: 'visible', timeout: 5000 });
    await this.pollenLink.click();
    await this.regionDropdown.waitFor({ state: 'attached', timeout: 5000 });
  }

  async selectRegion(regionCode) {
    // Scroll dropdown into view before interacting
    await scrollUntilVisible(this.regionDropdown, { maxScrolls: 15, scrollStep: 200, timeout: 8000 });
    await this.regionDropdown.click();
    await this.regionDropdown.selectOption(regionCode);
  }

  async zoomIn(times = 1) {
    for (let i = 0; i < times; i++) {
      await this.zoomInBtn.click();
    }
  }

  async zoomOut(times = 1) {
    for (let i = 0; i < times; i++) {
      await this.zoomOutBtn.click();
    }
  }
}

module.exports = PollenPage;
