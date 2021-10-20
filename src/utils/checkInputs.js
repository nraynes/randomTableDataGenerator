const checkInputs = (headerTypes, validHeaderFields, validTypes) => {
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

module.exports = checkInputs;
