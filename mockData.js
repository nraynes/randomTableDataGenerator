/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import makeAName from './makeAName';

const randomTableData = (options) => {
  if (!options || typeof options !== 'object') {
    options = {};
  }
  const validTypes = {
    number: 'number',
    stringNumber: 'stringNumber',
    fullName: 'fullName',
    date: 'date',
    boolean: 'boolean',
    string: 'string',
  };
  const validHeaderFields = [
    // Type is required
    'type',
    // Options for numbers
    'max',
    'min',
    'sequential',
    // Options for stringNumbers
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
    // Options for strings
    'randomStringCollection',
  ];
  const {
    maxEntries = 50,
    minEntries = 1,
    amountOfEntries,
    headerTypes = [],
    outputType = 'arrays',
    keyNames = [],
    devCheck = true,
  } = options;
  // Check input of options if devCheck is set.
  if (devCheck) {
    for (let i = 0; i < headerTypes.length; i++) {
      if (typeof headerTypes[i] !== 'object') {
        throw new Error('headerTypes has incorrect type on some of its items.');
      } else {
        for (let j = 0; j < Object.keys(headerTypes[i]).length; j++) {
          if (!validHeaderFields.includes(Object.keys(headerTypes[i])[j])) {
            throw new Error('There is an invalid option on a headerField in randomTableData.');
          } else if (!Object.values(validTypes).includes(headerTypes[i].type)) {
            throw new Error('There is an invalid type specified in an option in randomTableData.');
          }
        }
      }
    }
  }
  const data = [];
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  let entries;
  if (amountOfEntries) {
    entries = amountOfEntries;
  } else {
    entries = minEntries + Math.floor(Math.random() * (maxEntries - minEntries));
  }
  const padZeros = (value, length) => {
    let strNum = `${value}`;
    while (strNum.length < length) {
      strNum = `0${strNum}`;
    }
    return strNum;
  };
  for (let i = 0; i < entries; i++) {
    const rowEntry = [];
    for (let j = 0; j < headerTypes.length; j++) {
      const {
        type,
        max = 500,
        min = 0,
        sequential = false,
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
        randomStringCollection = [
          'indication',
          'assumption',
          'effort',
          'politics',
          'tennis',
          'bonus',
          'union',
          'departure',
          'mud',
          'refrigerator',
          'historian',
          'actor',
          'president',
          'collection',
          'competition',
          'news',
          'measurement',
          'beer',
          'environment',
          'sir',
          'engineering',
          'physics',
          'computer',
          'imagination',
          'meaning',
          'description',
          'communication',
          'tale',
          'database',
          'reputation',
          'throat',
          'user',
          'quantity',
          'office',
          'preference',
          'trainer',
          'wood',
          'piano',
          'relationship',
          'initiative',
          'truth',
          'criticism',
          'climate',
          'lab',
          'soup',
          'mood',
          'intention',
          'thing',
          'emotion',
          'sample',
        ],
      } = headerTypes[j];
      switch (type) {
        case validTypes.string:
          const randomWord = randomStringCollection[Math.floor(Math.random() * (randomStringCollection.length - 0.1))];
          rowEntry.push(randomWord);
          break;
        case validTypes.number:
          if (sequential) {
            rowEntry.push(min + i);
          } else {
            rowEntry.push(min + Math.floor(Math.random() * (max - min)));
          }
          break;
        case validTypes.stringNumber:
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
          const finalString = padZeros(buildStr, padWithZeros + length);
          rowEntry.push(finalString);
          break;
        case validTypes.fullName:
          rowEntry.push(makeAName());
          break;
        case validTypes.date:
          const pickedDate = randomDate(startDate, endDate);
          let weekDay = '';
          const todayNum = pickedDate.getDay();
          if (todayNum === 0) {
            weekDay = 'Sunday';
          } else if (todayNum === 1) {
            weekDay = 'Monday';
          } else if (todayNum === 2) {
            weekDay = 'Tuesday';
          } else if (todayNum === 3) {
            weekDay = 'Wednesday';
          } else if (todayNum === 4) {
            weekDay = 'Thursday';
          } else if (todayNum === 5) {
            weekDay = 'Friday';
          } else if (todayNum === 6) {
            weekDay = 'Saturday';
          }
          let curHours = pickedDate.getHours();
          let AMPM = 'AM';
          if (curHours > 12) {
            curHours -= 12;
            AMPM = 'PM';
          }
          if (curHours === 0) {
            curHours = 12;
          }
          const curMonth = pickedDate.getMonth() + 1;
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
          let pushItem;
          if (dateOnly) {
            if (words) {
              pushItem = `${weekDay}, ${monthWord} ${padZeros(pickedDate.getDate(), 2)}, ${pickedDate.getFullYear()}`;
            } else {
              pushItem = `${weekDay} ${padZeros(pickedDate.getDate(), 2)}/${curMonth}/${pickedDate.getFullYear()}`;
            }
          } else if (timeOnly) {
            pushItem = `${curHours}:${padZeros(pickedDate.getMinutes(), 2)}${noSeconds ? '' : `:${padZeros(pickedDate.getSeconds(), 2)}`}${noAMPM ? '' : ` ${AMPM}`}`;
          } else if (yearOnly) {
            pushItem = `${pickedDate.getFullYear()}`;
          } else if (monthOnly) {
            pushItem = `${monthWord}`;
          } else if (dayOnly) {
            if (words) {
              pushItem = `${weekDay} ${pickedDate.getDate()}`;
            } else {
              pushItem = `${pickedDate.getDate()}`;
            }
          } else if (weekDayOnly) {
            pushItem = `${weekDay}`;
          } else if (hoursOnly) {
            pushItem = `${curHours}${noAMPM ? '' : ` ${AMPM}`}`;
          } else if (minutesOnly) {
            pushItem = `${padZeros(pickedDate.getMinutes(), 2)}`;
          } else if (secondsOnly) {
            pushItem = `${padZeros(pickedDate.getSeconds(), 2)}`;
          } else if (timeZoneOnly) {
            if (specific) {
              pushItem = `${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
            } else {
              const strSplit = pickedDate.toString().split('(')[1];
              pushItem = strSplit.substring(0, strSplit.length - 1);
            }
          } else {
            pushItem = pickedDate;
          }
          if (dateType) {
            rowEntry.push(pushItem);
          } else {
            rowEntry.push(`${pushItem}`);
          }
          break;
        case validTypes.boolean:
          const boolVal = Math.floor(Math.random() * 1.99) < 1 ? 'false' : 'true';
          rowEntry.push(boolVal);
          break;
        default:
          throw new Error('There was a problem with type checking in randomTableData.');
      }
    }
    if (outputType === 'arrays') {
      data.push(rowEntry);
    } else if (outputType === 'objects') {
      if (keyNames.length <= 0) {
        throw new Error('No key names provided.');
      } else {
        const buildObj = {};
        for (let u = 0; u < rowEntry.length; u++) {
          buildObj[keyNames[u]] = rowEntry[u];
        }
        data.push(buildObj);
      }
    } else {
      throw new Error('Wrong output type.');
    }
  }
  return data;
};

export default randomTableData;
