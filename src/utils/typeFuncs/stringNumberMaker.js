const padZeros = require('../padZeros');

const makeAStringNumber = (fixedLength, maxLength, padWithZeros) => {
  let length;
  if (fixedLength) {
    length = fixedLength;
  } else {
    length = Math.floor(Math.random() * maxLength);
  }
  let buildStr = '';
  for (let k = 0; k < length; k++) {
    buildStr += `${Math.floor(Math.random() * 9.99)}`;
  }
  return padZeros(buildStr, padWithZeros + length);
}

module.exports = makeAStringNumber;
