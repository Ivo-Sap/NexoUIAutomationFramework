const BaseElements = require("../base-elements");

class NavigationElements extends BaseElements {
  async getPageTitle() { 
    const titleElement = await this.driver.findElement(this.By.css('div.zzDege[role="heading"]'));
    return await titleElement.getText();
  }

  async getRejectCookiesButton() {
    return await this.driver.findElement(this.By.xpath(`//span[text()='Reject all']`));
  }
}

module.exports = NavigationElements;
