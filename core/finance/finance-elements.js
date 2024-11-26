const BaseElements = require('../base-elements');

class FinanceElements extends BaseElements {
    async getPriceElement() {
        return await this.driver.findElement(this.By.css('.YMlKec.fxKbKc'));
    }

    async getPairElement(pair) {
        return await this.driver.findElement(this.By.css(`a[href*='${pair}']`));
    }
}

module.exports = FinanceElements;
