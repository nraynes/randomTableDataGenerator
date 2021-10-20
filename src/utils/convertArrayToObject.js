const convertArrayToObject = (arr, keyNames) => {
    const buildObj = {};
    for (let u = 0; u < arr.length; u++) {
        buildObj[keyNames[u]] = arr[u];
    }
    return buildObj;
};

module.exports = convertArrayToObject;
