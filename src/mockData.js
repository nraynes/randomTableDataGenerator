// Import stores.
const { nouns, techNouns, techManufacturers } = require('./stores/nouns/index');
const validTypes = require('./stores/config/validTypes');
const validHeaderFields = require('./stores/config/validHeaderFields');

// Import utility functions.
const checkInputs = require('./utils/checkInputs');
const convertArrayToObject = require('./utils/convertArrayToObject');
const { getRandomNumber } = require('./utils/getRandomNumber');
const isObject = require('./utils/isObject');

// Import type functions.
const makeAName = require('./utils/typeFuncs/nameMaker');
const makeAString = require('./utils/typeFuncs/stringMaker');
const makeANumber = require('./utils/typeFuncs/numberMaker');
const makeAStringNumber = require('./utils/typeFuncs/stringNumberMaker');
const makeABoolean = require('./utils/typeFuncs/booleanMaker');
const makeADate = require('./utils/typeFuncs/dateMaker');
const { string } = require('./stores/config/validTypes');

const randomTableData = (options, callback) => {
  // Set options to empty object if none are provided.
  if (!options || typeof options !== 'object') {
    options = {};
  }

  // Grab process variable for automatic error control.
  let nodeEnv;
  if (process.env.NODE_ENV) {
    nodeEnv = process.env.NODE_ENV;
  }

  // Destructure options and provide default values.
  const {
    maxEntries = 50,
    minEntries = 1,
    amountOfEntries,
    headerTypes = [
      { type: string },
      { type: string },
      { type: string },
      { type: string },
      { type: string },
      { type: string },
      { type: string },
      { type: string },
      { type: string },
      { type: string },
    ],
    outputType = 'arrays',
    keyNames = [],
    devCheck = nodeEnv === 'development' ? true : false,
  } = options;

  // Check input of options if devCheck is set.
  if (devCheck) {
    checkInputs(headerTypes, validHeaderFields, validTypes);
  }

  // If an object schema was provided, convert it to an array.
  let nameOfKeys;
  if (isObject(keyNames)) {
    nameOfKeys = Object.keys(keyNames);
  } else {
    nameOfKeys = keyNames;
  }

  // Initialize empty array to store the table data.
  const data = [];

  // Initialize entries based on inputs.
  let entries;
  if (amountOfEntries) {
    entries = amountOfEntries;
  } else {
    entries = getRandomNumber(minEntries, maxEntries);
  }

  // Start creating entries and adding them to return value.
  for (let i = 0; i < entries; i++) {
    // Initialize empty row.
    const rowEntry = [];
    for (let j = 0; j < headerTypes.length; j++) {

      // Initialize parameters with defaults if neccesary.
      const {
        type,
        max = 500,
        min = 0,
        sequential = false,
        minLength = 0,
        maxLength = 10,
        fixedLength,
        padWithZeros = 0,
        startDate = new Date(2012, 0, 1),
        endDate = new Date(),
        dateOnly = false,
        words = false,
        timeOnly = false,
        yearOnly = false,
        monthOnly = false,
        dayOnly = false,
        weekDayOnly = false,
        hoursOnly = false,
        minutesOnly = false,
        secondsOnly = false,
        timeZoneOnly = false,
        specific = false,
        noSeconds = false,
        noAMPM = false,
        dateType = false,
        boolType = false,
        numberType = false,
        randomStringCollection = nouns,
        useTechNouns = false,
        useTechManufacturers = false,
      } = headerTypes[j];

      // Check if switches for set for string collection.
      let stringCollection = randomStringCollection;
      if (useTechNouns) {
        stringCollection = techNouns;
      } else if (useTechManufacturers) {
        stringCollection = techManufacturers;
      }

      // Create data point based on headerType values.
      switch (type) {
        case validTypes.string:
          rowEntry.push(makeAString(stringCollection));
          break;
        case validTypes.number:
          rowEntry.push(makeANumber(min, max, i, sequential));
          break;
        case validTypes.stringNumber:
          rowEntry.push(makeAStringNumber(fixedLength, minLength, maxLength, padWithZeros));
          break;
        case validTypes.fullName:
          rowEntry.push(makeAName());
          break;
        case validTypes.date:
          rowEntry.push(makeADate(
            startDate,
            endDate,
            dateOnly,
            words,
            timeOnly,
            yearOnly,
            monthOnly,
            dayOnly,
            weekDayOnly,
            hoursOnly,
            minutesOnly,
            secondsOnly,
            timeZoneOnly,
            specific,
            noSeconds,
            noAMPM,
            dateType,
          ));
          break;
        case validTypes.boolean:
          rowEntry.push(makeABoolean(boolType, numberType));
          break;
        default:
          throw new Error('There was a problem with type checking in randomTableData.');
      }
    }

    // If specified, convert the entry to an object.
    if (outputType === 'arrays') {
      data.push(rowEntry);
    } else if (outputType === 'objects') {
      if (nameOfKeys.length <= 0 || !Array.isArray(nameOfKeys)) {
        throw new Error('No key names provided.');
      } else {
        data.push(convertArrayToObject(rowEntry, nameOfKeys));
      }
    } else {
      throw new Error('Wrong output type.');
    }
  }

  // Initiate callback function if one is specified.
  if (callback) {
    callback(data);
  }

  // Return table data.
  return data;
};

module.exports = randomTableData;
