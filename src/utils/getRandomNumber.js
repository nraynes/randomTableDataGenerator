const getRandomNumber = (min, max) => (
    min + Math.floor(Math.random() * (max - min))
);

const getRandomDigit = (base = 10) => (
    Math.floor(Math.random() * (base - 0.51))
);

const getRandomArrayIndex = (arrLength) => (
    Math.floor(Math.random() * (arrLength + 0.49))
);

module.exports = {
    getRandomNumber,
    getRandomDigit,
    getRandomArrayIndex,
};
