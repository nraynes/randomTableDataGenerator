const isDate = (x) => (
  new Date(`${`${parseInt(x - (x + 1), 10)}` !== 'NaN' ? `${x}padding` : x}`).toString() !== 'Invalid Date'
);

module.exports = isDate;
