const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.max = [];
  }
  calc(arr) {
    return arr.reduce((previousValue, currentValue) => {
      if (Array.isArray(currentValue)) {
        let deep = this.calc(currentValue);
        this.max.push(deep);
        return deep + previousValue;
      } else return previousValue;
    }, 1);
  }
  calculateDepth(arr) {
    this.calc(arr);
    return this.max.length != 0 ? Math.max(...this.max) + 1 : 1;
  }
}

module.exports = {
  DepthCalculator,
};
