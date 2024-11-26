class Util {
  static async waitForSeconds(secondsCount) {
    await new Promise((resolve) => setTimeout(resolve, secondsCount * 1000));
  }

  static getDeviationsMap(priceHistory, initialPrice) {
    return priceHistory.map((price) => ((price - initialPrice) / initialPrice) * 100);
  }
}

module.exports = Util;
