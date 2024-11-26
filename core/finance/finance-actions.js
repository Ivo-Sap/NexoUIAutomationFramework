const BaseActions = require('../base-actions');
const Util = require('../../utils/util');

class FinanceActions extends BaseActions {
    async getPrice() {
        const priceElement = await this.elements.getPriceElement();
        const priceText = await priceElement.getText();
        const price = parseFloat(priceText.replace(/[^0-9.-]+/g, ""));
        return price;
    }

    async collectPriceData(durationInSeconds, frequencyInSeconds, priceHistory) {
        const iterationsCount = durationInSeconds / frequencyInSeconds;
        for (let i = 0; i < iterationsCount; i++) {
            await Util.waitForSeconds(frequencyInSeconds);
            priceHistory.push(await this.getPrice());
        }
    }
}

module.exports = FinanceActions;
