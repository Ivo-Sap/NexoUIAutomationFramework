const BaseActions = require("../base-actions");

class NavigationActions extends BaseActions {
  async navigateToPage(url) {
    await this.driver.get(url);
  }

  async rejectCookies() {
    const button = await this.elements.getRejectCookiesButton();
    await button.click();
  }
}

module.exports = NavigationActions;
