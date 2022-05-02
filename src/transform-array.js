const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let copy =[...arr];
  for (let i = 0; i < copy.length; i ++) {
    if (copy[i] == "--discard-next" && (copy[i+1] || copy[i+1] == null)) {
      copy[i + 1] = null;
      copy.splice(i, 1);
    }
    if (copy[i] == "--discard-prev"  && (copy[i-1] || copy[i-1] == null)) {
      copy[i-1] = null;
      copy.splice(i, 1);
    }
    if (copy[i] == '--double-next' && (copy[i+1] || copy[i+1] == null)) {
      copy.splice(i, 1, copy[i+1]);
      i++;
    }
    if (copy[i] == "--double-prev"  && (copy[i-1] || copy[i-1] == null)) {
      copy.splice(i, 1, copy[i-1]);
      i++;
    }
    console.log(copy)
  }
  return copy.filter(n => n !== null && n !==  undefined);
}

module.exports = {
  transform,
};
