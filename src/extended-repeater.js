module.exports = function repeater(str, options = {}) {
  if (typeof str !== "string") {
    str = str + "";
  }

  const defaultOptions = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|",
  };

  return new Array(options.repeatTimes || defaultOptions.repeatTimes)
    .fill(
      str +
        new Array(
          options.additionRepeatTimes || defaultOptions.additionRepeatTimes
        )
          .fill(
            "addition" in options
              ? options.addition + ""
              : defaultOptions.addition
          )
          .join(options.additionSeparator || defaultOptions.additionSeparator)
    )
    .join(options.separator || defaultOptions.separator);
};
