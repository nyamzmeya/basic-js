const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = str + "";
  let repeatTimes = parseInt(options.repeatTimes) || 0;
  let separator = options.separator || "+";
  let addition = options.addition !== undefined ? options.addition + "" : "";
  let additionRepeatTimes = options.additionRepeatTimes || 0;
  let additionSeparator =
    options.additionSeparator !== undefined
      ? options.additionSeparator + ""
      : "|";

  if (repeatTimes == 0 && additionRepeatTimes == 0) {
    return str + addition;
  } else if (repeatTimes == 0) {
    return (
      str + Array(additionRepeatTimes).fill(addition).join(additionSeparator)
    );
  } else if (additionRepeatTimes == 0) {
    return Array(repeatTimes)
      .fill(str + addition)
      .join(separator);
  } else
    return Array(repeatTimes)
      .fill(
        str + Array(additionRepeatTimes).fill(addition).join(additionSeparator)
      )
      .join(separator);
}

module.exports = {
  repeater,
};
