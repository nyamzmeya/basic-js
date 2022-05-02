const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
   if (!str) {
     return "";
   }
  let letter = str[0];
  let num = 1;
  let answ = ""
  for (let i = 1; i < str.length; i ++) {
    if (str[i] == letter) {
      num += 1;
    } else {
      answ += (num == 1 ? "" : num) + letter;
      letter = str[i];
      num = 1;
    }
  }
  return answ + (num == 1 ? "" : num) + letter;
}

module.exports = {
  encodeLine
};
