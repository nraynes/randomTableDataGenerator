const makeANumber = (min, max, i, sequential) => {
  if (sequential) {
    return min + i;
  } else {
    return min + Math.floor(Math.random() * (max - min));
  }
};

module.exports = makeANumber;
