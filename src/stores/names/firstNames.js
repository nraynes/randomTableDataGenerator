const boyNames = require('./boyAndGirlNames/boyNames');
const girlNames = require('./boyAndGirlNames/girlNames');

const firstNames = [...boyNames, ...girlNames];

module.exports = firstNames