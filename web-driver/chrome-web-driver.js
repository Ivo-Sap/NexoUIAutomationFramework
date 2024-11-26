const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

class ChromeWebDriver {
  static async createDriver(headless) {
    let options = new chrome.Options();
    if (headless) {
      options.addArguments("--headless");
    }
    options.addArguments("--lang=en");
    return await new Builder().forBrowser("chrome").setChromeOptions(options).build();
  }
}

module.exports = ChromeWebDriver;
