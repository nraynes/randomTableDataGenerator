const { getRandomDigit } = require("../getRandomNumber");

const makeABoolean = (boolType, numberType) => {
    let randomVal = getRandomDigit(2);
    if (boolType) {
        return randomVal < 1;
    } else if (numberType) {
        return randomVal;
    }
    return randomVal < 1 ? 'false' : 'true'
};

module.exports = makeABoolean;
