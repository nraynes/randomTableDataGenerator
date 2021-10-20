const makeAString = (randomStringCollection) => (
    randomStringCollection[Math.floor(Math.random() * (randomStringCollection.length - 0.1))]
);

module.exports = makeAString;
