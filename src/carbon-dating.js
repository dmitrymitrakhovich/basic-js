const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity = 0) {
  if (typeof sampleActivity !== "string") return false;
  let activity = parseFloat(sampleActivity);
  if (!activity) return false;
  if (activity > 15 || activity <= 0) return false;

  return Math.ceil(
    (Math.log(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD) / 0.693
  );
};
