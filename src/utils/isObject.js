const isDate = require('./isDate');

const isObject = (x) => (
    !isDate(x) && typeof x === 'object' && !Array.isArray(x)
);

module.exports = isObject;
