/* eslint-disable no-plusplus */
const firstNames = require('../../stores/names/firstNames');
const lastNames = require('../../stores/names/lastNames');
const { getRandomArrayIndex } = require('../getRandomNumber');

const names = [firstNames, lastNames];
const makeAName = () => {
  let fullName = '';
  for (let i = 0; i < names.length; i++) {
    let randomIndex = getRandomArrayIndex(names[i].length);
    if (randomIndex > names[i].length) {
      randomIndex = names[i].length - 1;
    } else if (randomIndex < 0) {
      randomIndex = 0;
    }
    fullName += `${names[i][randomIndex]}${i + 1 >= names.length ? '' : ' '}`;
  }
  return fullName;
};

module.exports = makeAName;
