const { test, expect } = require('../../test-fixture');
const HomePage = require('../../pages/HomePage');
const ForecastPage = require('../../pages/ForecastPage');
const PollenPage = require('../../pages/PollenPage');
const MapPage = require('../../pages/MapPage');

test('User story: Search, forecast, pollen and map', async ({ page }) => {
  const home = new HomePage(page);
  const forecast = new ForecastPage(page);
  const pollen = new PollenPage(page);
  const map = new MapPage(page);

  // --------- Home Page ---------
  await page.goto('/');
  await home.acceptCookies();
  await home.searchLocation('Cambridge');

  // --------- Forecast Page ---------
  await forecast.selectDate('Sat');
  await forecast.toggleReducedForecast();
  await forecast.toggleFullForecast();
  await forecast.setTemperatureUnits('f');
  await forecast.setTemperatureUnits('c');
  await forecast.openTempInfo();
  await forecast.closeTempInfo();
  await forecast.setWindSpeedUnits('kph');
  await forecast.setWindSpeedUnits('mph');

  // --------- Pollen Page ---------
  await pollen.openPollenTab();
  // Zoom controls
  await pollen.zoomIn(2);
  await pollen.zoomOut(1);


  // --------- Precipitation Map Page ---------
  await map.zoomOut();
  await map.zoomIn();
  await map.zoomIn();
  await map.zoomIn();
  await map.openMapsAndCharts();
  await map.openPrecipitationMap();
  await map.clickMap();
  await map.selectDateFromList('Thu 29 May');
  await map.selectTime('18:00');
  await map.selectTime('19:30');
});