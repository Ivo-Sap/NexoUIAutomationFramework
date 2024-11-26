const assert = require('assert');

class BaseAsserts {
  constructor(driver, elements) {
    this.driver = driver;
    this.elements = elements;
    this.assert = assert;
  }
}

module.exports = BaseAsserts;
