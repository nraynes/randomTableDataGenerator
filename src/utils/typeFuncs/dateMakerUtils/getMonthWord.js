const getMonthWord = (curMonth) => {
  let monthWord = '';
  if (curMonth === 1) {
    monthWord = 'January';
  } else if (curMonth === 2) {
    monthWord = 'February';
  } else if (curMonth === 3) {
    monthWord = 'March';
  } else if (curMonth === 4) {
    monthWord = 'April';
  } else if (curMonth === 5) {
    monthWord = 'May';
  } else if (curMonth === 6) {
    monthWord = 'June';
  } else if (curMonth === 7) {
    monthWord = 'July';
  } else if (curMonth === 8) {
    monthWord = 'August';
  } else if (curMonth === 9) {
    monthWord = 'September';
  } else if (curMonth === 10) {
    monthWord = 'October';
  } else if (curMonth === 11) {
    monthWord = 'November';
  } else if (curMonth === 12) {
    monthWord = 'December';
  }
  return monthWord;
};

module.exports = getMonthWord;
