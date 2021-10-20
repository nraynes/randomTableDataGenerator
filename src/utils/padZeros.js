const padZeros = (value, length) => {
  let strNum = `${value}`;
  while (strNum.length < length) {
    strNum = `0${strNum}`;
  }
  return strNum;
};

module.exports = padZeros;
