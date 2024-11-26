const ChromeWebDriver = require("./chrome-web-driver");
const FirefoxWebDriver = require("./firefox-web-driver");

class WebDriverManager {
  constructor(browser, headless) {
    this.browser = browser;
    this.headless = headless;
    this.driver = null;
  }

  async createDriver() {
    if (this.browser === "chrome") {
      this.driver = await ChromeWebDriver.createDriver(this.headless);
    } else if (this.browser === "firefox") {
      this.driver = await FirefoxWebDriver.createDriver(this.headless);
    } else {
      throw new Error("Unsupported browser!");
    }
    return this.driver;
  }

  async quitDriver() {
    if (this.driver) {
      const browserName = await this.driver.getCapabilities().getBrowserName;
      await this.driver.quit();
      if (browserName === "chrome") {
        exec("taskkill /F /IM chromedriver.exe /T", (_error, _stdout) => {});
      } else if (browserName === "firefox") {
        exec("taskkill /F /IM geckodriver.exe /T", (_error, _stdout) => {});
      }
    }
  }
}

module.exports = WebDriverManager;
