const getRandomNumber = (min, max) => (
    min + Math.floor(Math.random() * max - min)
);

const getRandomDigit = (base = 10) => (
    Math.floor(Math.random() * (base - 0.01))
);

const getRandomArrayIndex = (arrLength) => (
    Math.floor(Math.random() * (names[i].length + 0.99))
);

module.exports = {
    getRandomNumber,
    getRandomDigit,
    getRandomArrayIndex,
};
