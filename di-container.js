const FinanceElements = require("./core/finance/finance-elements");
const FinanceActions = require("./core/finance/finance-actions");
const FinanceAsserts = require("./core/finance/finance-asserts");
const NavigationElements = require("./core/navigation/navigation-elements");
const NavigationActions = require("./core/navigation/navigation-actions");
const NavigationAsserts = require("./core/navigation/navigation-asserts");
const BaseActions = require("./core/base-actions");
const BaseAsserts = require("./core/base-asserts");
const BaseElements = require("./core/base-elements");
const ConfigurationManager = require("./configurations/configuration-manager");
const ScenarioContext = require("./contexts/scenario-context");
const GlobalContext = require("./contexts/global-context");
const WebDriverManager = require("./web-driver/web-driver-manager");

class DIContainer {
  constructor() {
    this.instances = new Map();
  }

  register(name, dependency) {
    if (!this.instances.has(name)) {
      this.instances.set(name, dependency);
    }
  }

  get(name) {
    return this.instances.get(name);
  }

  getInstancesAsObject() {
    const obj = {};
    for (const [key, value] of this.instances.entries()) {
      obj[key] = value;
    }
    return obj;
  }

  async initialize() {
    const config = ConfigurationManager.getConfiguration(process.env.NODE_ENV || "local");

    const webDriverManager = new WebDriverManager(config.browser, config.headless);
    const driver = await webDriverManager.createDriver();
    await driver.manage().window().maximize();

    this.register("config", config);
    this.register("driver", driver);
    this.register("webDriverManager", webDriverManager);
    this.register("scenarioContext", new ScenarioContext());
    this.register("globalContext", new GlobalContext());
    this.register("baseElements", new BaseElements(driver));
    this.register("baseActions", new BaseActions(driver, this.get("baseElements")));
    this.register("baseAsserts", new BaseAsserts(driver));
    this.register("financeElements", new FinanceElements(driver));
    this.register("financeActions", new FinanceActions(driver, this.get("financeElements")));
    this.register("financeAsserts", new FinanceAsserts(driver, this.get("financeElements")));
    this.register("navigationElements", new NavigationElements(driver));
    this.register("navigationActions", new NavigationActions(driver, this.get("navigationElements")));
    this.register("navigationAsserts", new NavigationAsserts(driver, this.get("navigationElements")));
  }

  async cleanup() {
    await this.get("webDriverManager").quitDriver();
  }
}

const container = new DIContainer();
module.exports = container;
