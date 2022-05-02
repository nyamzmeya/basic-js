const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let answ = [];
  for (let i = 0; i < names.length; i++) {
      if (answ.map(file => file[0]).includes(names[i])) {
          let num = answ.filter(file => file[0] == names[i]).length;
          answ.push([names[i], num]);
      } else answ.push([names[i], 0])
  }
  answ = answ.map(file => file[1] !== 0 ? `${file[0]}(${file[1]})` : file[0]);
  if (new Set(answ).size != answ.length) {
      return renameFiles(answ)
  }
  return answ;

}

module.exports = {
  renameFiles,
};
