class MapPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.zoomOutBtn = page.getByRole('button', { name: 'Zoom out' });
    this.zoomInBtn = page.getByRole('button', { name: 'Zoom in' });
    this.mapsAndChartsLink = page.getByLabel('second level', { exact: true }).getByRole('link', { name: 'Maps & charts' });
    this.precipitationMapLink = page.getByRole('link', { name: 'Precipitation map' });
    this.mapLocator = page.locator('#map');
  }

  async zoomOut() {
    await this.zoomOutBtn.click();
  }

  async zoomIn() {
    await this.zoomInBtn.click();
  }

  async openMapsAndCharts() {
    await this.mapsAndChartsLink.click();
  }

  async openPrecipitationMap() {
    await this.precipitationMapLink.click();
  }

  async clickMap() {
    await this.mapLocator.click();
  }

  async selectLocationDot(dotNumber) {
    await this.page.locator(`#location-dot-${dotNumber}`).first().click();
  }

  async selectDateFromList(dateText) {
    await this.page.locator('li').filter({ hasText: dateText }).click();
  }

  async selectTime(timeText) {
    // Select nth(2) occurrence to match your original, but ideally avoid nth if possible
    const timeElements = this.page.getByText(timeText);
    await timeElements.nth(2).click();
  }

}

module.exports = MapPage;
