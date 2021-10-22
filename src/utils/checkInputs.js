const checkInputs = (headerTypes, validHeaderFields, validTypes) => {
  for (let i = 0; i < headerTypes.length; i++) {
    if (typeof headerTypes[i] !== 'object') {
      throw new Error('Invalid input on headerTypes. Please pass an array of objects.');
    } else {
      for (let j = 0; j < Object.keys(headerTypes[i]).length; j++) {
        if (!validHeaderFields.includes(Object.keys(headerTypes[i])[j])) {
          throw new Error(`${Object.keys(headerTypes[i])[j]} is not a valid header field.`);
        } else if (!headerTypes[i].type) {
          throw new Error(`There was no type specified on item ${i+1} in headerTypes.`);
        } else if (!Object.values(validTypes).includes(headerTypes[i].type)) {
          throw new Error(`${headerTypes[i].type} is not a valid type.`);
        }
      }
    }
  }
}

module.exports = checkInputs;
