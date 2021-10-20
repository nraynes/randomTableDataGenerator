const getWeekDay = (todayNum) => {
  let weekDay = '';
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
  return weekDay;
};

module.exports = getWeekDay;
