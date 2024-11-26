const BaseAsserts = require("../base-asserts");

class NavigationAsserts extends BaseAsserts {

  async assertPageTitleContains(expectedTitle) {
    const actualTitle = await this.elements.getPageTitle();
    this.assert.strictEqual(expectedTitle, actualTitle, `Expected title is: ${expectedTitle}, but actual title is: ${actualTitle}`);
  }
}

module.exports = NavigationAsserts;
