const filterHours = (curHours) => {
  let a = 'AM';
  if (curHours > 12) {
    curHours -= 12;
    a = 'PM';
  }
  if (curHours === 0) {
    curHours = 12;
  }
  return { 
    AMPM: a,
    curHours: curHours,
  };
};

module.exports = filterHours;
