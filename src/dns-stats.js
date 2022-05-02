const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

 function getDNSStats(domains) {
  let search = [];
  domains = domains.map(d => d.split(".").reverse().join("."));
  domains.forEach(d => {
     if (d.split(".").length == 3) {
         console.log(d)
         search.push(d);
         let dot1 = d.indexOf(".");
         search.push(d.slice(0, dot1));
         let dot2 = d.indexOf(".", dot1);
         search.push(d.slice(0, dot2));
      
  } else {
      search.push(d);
      let dot1 = d.indexOf(".");
      search.push(d.slice(0, dot1));
  }
})
let answ = {};

search = new Set(search);

for (s of search) {
    let reg = new RegExp(s, "g")
    let n = domains.join("").match(reg).length;
    answ["." + s] = n;
}

return answ;
}

module.exports = {
  getDNSStats
};
