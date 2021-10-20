const { getRandomArrayIndex } = require("../getRandomNumber");

const makeAString = (randomStringCollection) => (
    randomStringCollection[getRandomArrayIndex(randomStringCollection.length)]
);

module.exports = makeAString;
