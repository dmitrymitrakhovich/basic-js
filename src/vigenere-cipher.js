const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(str, key) {
    if (str === undefined || key === undefined) throw Error();
    let result = [];
    let keyShift = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.alphabet.indexOf(str[i].toUpperCase()) === -1) {
        result[i] = str[i];
        keyShift++;
      } else {
        let strNum = this.alphabet.indexOf(str[i].toUpperCase());
        let keyNum = this.alphabet.indexOf(
          key[(i - keyShift) % key.length].toUpperCase()
        );
        result[i] = this.alphabet[(strNum + keyNum) % this.alphabet.length];
      }
    }
    if (!this.direct) result.reverse();
    return result.join("");
  }

  decrypt(str, key) {
    if (str === undefined || key === undefined) throw Error();
    let result = [];
    let keyShift = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.alphabet.indexOf(str[i].toUpperCase()) === -1) {
        result[i] = str[i];
        keyShift++;
      } else {
        let strNum = this.alphabet.indexOf(str[i].toUpperCase());
        let keyNum = this.alphabet.indexOf(
          key[(i - keyShift) % key.length].toUpperCase()
        );
        result[i] = this.alphabet[
          (strNum - keyNum + this.alphabet.length) % this.alphabet.length
        ];
      }
    }
    if (!this.direct) result.reverse();
    return result.join("");
  }
}

module.exports = VigenereCipheringMachine;
