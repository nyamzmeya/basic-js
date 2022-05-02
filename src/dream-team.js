const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let res = [];
  if (!members || !Array.isArray(members)) {
    return false;
  }
  members.forEach((m) => {
    if (typeof m == "string") {
      res.push(m.trim().charAt(0).toLowerCase());
    }
  });
  res = res.sort();
  res = res.map((l) => l.toUpperCase());
  return res.join("");
}

module.exports = {
  createDreamTeam,
};
