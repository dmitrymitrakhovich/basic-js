const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!Array.isArray(matrix) || !matrix) {
    return 0;
  }
  return [].concat(...matrix).filter((i) => i === "^^").length;
};
