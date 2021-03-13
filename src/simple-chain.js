const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value === undefined
      ? this.chain.push("( )")
      : this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position == "number" &&
      position % 1 === 0 &&
      position > 0 &&
      position <= this.chain.length
    ) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw Error();
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.result = this.chain.reduce((r, v) => (r += !!r ? `~~${v}` : `${v}`));
    this.chain = [];
    return this.result;
  },
};

module.exports = chainMaker;
