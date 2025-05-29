class ForecastPage {
  constructor(page) {
    this.page = page;
    this.dateLink = (dateText) => page.getByRole('link', { name: new RegExp(dateText, 'i') });
    this.showReducedBtn = page.getByRole('button', { name: 'Show reduced forecast' });
    this.showFullBtn = page.getByRole('button', { name: 'Show full forecast' });
    this.tempUnitsDropdown = page.getByLabel('Choose temperature units');
    this.windUnitsDropdown = page.getByLabel('Choose wind speed units');
    this.tempInfoBtn = page.getByRole('button', { name: 'Temperature information', exact: true });
    this.closeInfoPopupBtn = page.getByRole('button', { name: 'Close information pop-up' });
  }

  async selectDate(dateText) {
    await this.dateLink(dateText).click();
  }

  async toggleReducedForecast() {
    await this.showReducedBtn.click();
  }

  async toggleFullForecast() {
    await this.showFullBtn.click();
  }

  async setTemperatureUnits(unit) {
    await this.tempUnitsDropdown.selectOption(unit);
  }

  async setWindSpeedUnits(unit) {
    await this.windUnitsDropdown.selectOption(unit);
  }

  async openTempInfo() {
    await this.tempInfoBtn.click();
  }

  async closeTempInfo() {
    await this.closeInfoPopupBtn.click();
  }
}

module.exports = ForecastPage;
