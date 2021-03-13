const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }

  let res = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next": {
        j = i;
        i++;
        break;
      }
      case "--discard-prev": {
        if (j === i - 1) {
          res.pop();
          j = i;
        }
        break;
      }
      case "--double-next": {
        if (i + 1 < arr.length) {
          res.push(arr[i + 1]);
        }
        break;
      }
      case "--double-prev": {
        if (res.length !== 0 && j === i - 1) {
          res.push(res[res.length - 1]);
          j = i;
        }
        break;
      }
      default: {
        res.push(arr[i]);
        j = i;
        break;
      }
    }
  }

  return res;
};
