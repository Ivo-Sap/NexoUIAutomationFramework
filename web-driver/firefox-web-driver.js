const { Builder } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");

class FirefoxWebDriver {
  static async createDriver(headless) {
    let options = new firefox.Options();
    if (headless) {
      options.addArguments("-headless");
    }
    options.setPreference("intl.accept_languages", "en");
    return await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
  }
}

module.exports = FirefoxWebDriver;
