const { By } = require('selenium-webdriver');

class MarketsElements {
    constructor(driver) {
        this.driver = driver;
        this.By = By;
    }

    async getMarketElement(marketName) {
        return await this.driver.findElement(By.xpath(`//div[text()="${marketName}"]`));
    }
}

module.exports = MarketsElements;
