const randomTableData = require('../src/mockData');

console.log(randomTableData({
  minEntries: 10,
  maxEntries: 30,
  outputType: 'objects',
  devCheck: true,
  keyNames: {
    TestKeyOne: true,
    TestKeyTwo: true,
  },
  headerTypes: [
    {
      type: 'string',
      useTechManufacturers: true,
    },
    {
      type: 'stringNumber',
      minLength: 12,
      maxLength: 14,
    },
  ]
}))