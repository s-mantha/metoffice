class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.acceptAllBtn = page.getByRole('button', { name: 'Accept All' });
    this.searchInput = page.getByRole('combobox', { name: 'Search for a place,' });
    // Locator for the dropdown items — matching any item containing "Cambridge"
    this.searchResult = (location) => page.getByRole('menuitem').filter({ hasText: location });
  }

  async acceptCookies() {
    await this.acceptAllBtn.click();
  }

  async searchLocation(location) {
    await this.searchInput.fill(location);
    // Wait for dropdown items to appear and click the first one that contains the location text
    const option = this.searchResult(location).first();
    await option.waitFor({ state: 'visible' });
    await option.click();
  }
}

module.exports = HomePage;