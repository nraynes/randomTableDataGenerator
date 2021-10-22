const randomTableData = require('../src/mockData');

console.log(randomTableData({
  minEntries: 10,
  maxEntries: 30,
  outputType: 'objects',
  keyNames: {
      someString: true,
  },
  headerTypes: [
    {
        type: 'string',
    }
  ]
}))