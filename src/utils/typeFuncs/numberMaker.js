const { getRandomNumber } = require('../getRandomNumber');

const makeANumber = (min, max, i, sequential) => {
  if (sequential) {
    return min + i;
  } else {
    return getRandomNumber(min, max);
  }
};

module.exports = makeANumber;
