const padZeros = require('../padZeros');
const randomDate = require('./dateMakerUtils/randomDate');
const getWeekDay = require('./dateMakerUtils/getWeekDay');
const filterHours = require('./dateMakerUtils/filterHours');
const getMonthWord = require('./dateMakerUtils/getMonthWord');

const makeADate = (
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
  ) => {
  const pickedDate = randomDate(startDate, endDate);
  const todayNum = pickedDate.getDay();
  const dayVal = pickedDate.getDate()
  const yearVal = pickedDate.getFullYear()
  const minutesVal = pickedDate.getMinutes()
  const secondsVal = pickedDate.getSeconds()
  const weekDay = getWeekDay(todayNum);
  let numberOfHours = pickedDate.getHours();
  const { AMPM, curHours } = filterHours(numberOfHours)
  const curMonth = pickedDate.getMonth() + 1;
  const monthWord = getMonthWord(curMonth);
  let pushItem;
  if (dateOnly) {
    if (words) {
      pushItem = `${weekDay}, ${monthWord} ${padZeros(dayVal, 2)}, ${yearVal}`;
    } else {
      pushItem = `${weekDay} ${padZeros(dayVal, 2)}/${curMonth}/${yearVal}`;
    }
  } else if (timeOnly) {
    pushItem = `${curHours}:${padZeros(minutesVal, 2)}${noSeconds ? '' : `:${padZeros(secondsVal, 2)}`}${noAMPM ? '' : ` ${AMPM}`}`;
  } else if (yearOnly) {
    pushItem = `${yearVal}`;
  } else if (monthOnly) {
    pushItem = `${monthWord}`;
  } else if (dayOnly) {
    if (words) {
      pushItem = `${weekDay} ${dayVal}`;
    } else {
      pushItem = `${dayVal}`;
    }
  } else if (weekDayOnly) {
    pushItem = `${weekDay}`;
  } else if (hoursOnly) {
    pushItem = `${curHours}${noAMPM ? '' : ` ${AMPM}`}`;
  } else if (minutesOnly) {
    pushItem = `${padZeros(minutesVal, 2)}`;
  } else if (secondsOnly) {
    pushItem = `${padZeros(secondsVal, 2)}`;
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
    return pushItem;
  } else {
    return `${pushItem}`;
  }
};

module.exports = makeADate;
