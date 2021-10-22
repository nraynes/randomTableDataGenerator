const validHeaderFields = [
  // Type is required
  'type',

  // Options for numbers
  'max',
  'min',
  'sequential',

  // Options for stringNumbers
  'minLength',
  'maxLength',
  'fixedLength',
  'padWithZeros',

  // Options for dates
  'startDate',
  'endDate',
  'dateOnly',
  'words',
  'timeOnly',
  'yearOnly',
  'monthOnly',
  'dayOnly',
  'weekDayOnly',
  'hoursOnly',
  'minutesOnly',
  'secondsOnly',
  'timeZoneOnly',
  'specific',
  'noSeconds',
  'noAMPM',
  'dateType',

  // Options for booleans.
  'boolType',
  'numberType',

  // Options for strings
  'randomStringCollection',
  'useTechNouns',
  'useTechManufacturers',
];

module.exports = validHeaderFields;
