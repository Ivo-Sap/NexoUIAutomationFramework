class BaseActions {
  constructor(driver, elements) {
      this.driver = driver;
      this.elements = elements;
  }

  async clickOnMarket(marketName) {
      const marketElement = await this.elements.getMarketElement(marketName);
      await marketElement.click();
  }
}

module.exports = BaseActions;
