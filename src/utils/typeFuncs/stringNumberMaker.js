const padZeros = require('../padZeros');
const { getRandomNumber, getRandomDigit } = require('../getRandomNumber');

const makeAStringNumber = (fixedLength, minLength, maxLength, padWithZeros) => {
  let length;
  if (fixedLength) {
    length = fixedLength;
  } else {
    length = getRandomNumber(minLength, maxLength);
  }
  let buildStr = '';
  for (let k = 0; k < length; k++) {
    buildStr += `${getRandomDigit()}`;
  }
  return padZeros(buildStr, padWithZeros + length);
}

module.exports = makeAStringNumber;
