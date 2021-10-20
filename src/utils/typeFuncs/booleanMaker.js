const makeABoolean = (boolType, numberType) => {
    let randomVal = Math.floor(Math.random() * 1.99)
    if (boolType) {
        return randomVal < 1;
    } else if (numberType) {
        return randomVal;
    }
    return randomVal < 1 ? 'false' : 'true'
};

module.exports = makeABoolean;
