const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value === 'undefined') {
      this.chain.push("");
    } else this.chain.push(value);
    return this;
  },
  removeLink(position) {
      if (this.chain[position-1] === undefined) {
        this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish = this.chain.map(element => `( ${element} )`);
    this.chain = [];
    return finish.join("~~");
  }
};
module.exports = {
  chainMaker
};
