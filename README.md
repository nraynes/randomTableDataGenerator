# Random Table Data Generator

*This package is a work in progress. It was made as part of another project to mock out data without*
*having to set up a mock service worker. It has no dependencies and can be used to quickly fill a table*
*without needing to do any work. This helps for visualizing how a table may look in production when real*
*data is used. This is meant to be easy to use so if there is any learning curve or feature that could be*
*simplified or new ones added, please feel free to email me and I will add them in so that other people*
*can be able to use this for their projects with the least amount of effort needing to be put in.*

**Thank you for using this and providing feedback if you have!**

This library provides a function called randomTableData() that will generate either an
array of arrays or an array of objects for depending on what you specify in the options object.

You can also call the function with no options and it will return an array of between 0 and 50 arrays of 10 random strings.

To use this function, just call it and pass it an options object with all of the options that
you want.

The function will return the value or if a callback function was provided will pass the value to the callback.


## USAGE:

    SIMPLEST USAGE

    const tableData = randomTableDate();


    USAGE WITH OPTIONS


    const tableData = randomTableData({ ...yourOptionsHere });

    OR

    randomTableData({ ...yourOptionsHere }, (tableData) => {
        ...use the tableData here...
    });

    OR

    randomTableData({ ...yourOptionsHere }).then((tableData) => {
        ...use the tableData here...
    });

    OR

    const tableData = randomTableData({ ...yourOptionsHere }, (tableData) => {
        ...use the tableData here and assign to variable...
    });

    OR

    const tableData = randomTableData({ ...yourOptionsHere }).then((tableData) => {
        ...use the tableData here and assign to variable...
    });


## SYNTAX:

    randomTableData(options, callback);

    PARAMETERS:
        options = { ...yourOptionsHere } // Object

        callback = function () {} //Function


## VALID OPTIONS:
maxEntries:
- Integer
- Sets the maximum amount of table rows you want to recieve.
    This will be indicitave of the max length of the returned array.
    Default value is 50.

minEntries:
- Integer
- Sets the minimum amount of table rows you want to recieve.
    This will be indicitave of the minimum length of the returned array.
    Default value is 1.

amountOfEntries:
- Integer
- If this option is set, the returned value will always be the same size.
    No default.

outputType:
- String
- This option sets what kind of return value you want to recieve.
    If it is set to 'arrays' then you will recieve an array of arrays.
    If it is set to 'objects' then you will recieve an array of objects.
    Default value is 'arrays'.

keyNames:
- Array of Strings, or an Object
- Used in conjuction with the outputType option.
    This will set the key names for the objects in the returned array
    if outputType is set to 'objects'. You can pass either an array with the
    keynames you would like, or you can pass it an object as a schema for the output.
    This is a required field.
    Default value is an empty array.

devCheck:
- Boolean
- This is used in a development environment to check the options the function
    recieves and throw an error if there is any invalid input. This is a useful
    thing for determining where an issue lies in the options you are passing during
    development.
    Default value is false;

headerTypes:
- Array of Options Objects
- This option is where you specify what type of data you would like returned.
    The length of the array provided is indicitave of how many columns of data you want returned.
    Each Object must include a 'type' key indiciating what type of data you want to recieve for the specific
    column. You may also optionally specify other options depending on the type to modify the data that will
    be returned. You may read up on the valid data types and valid options you can pass below.
    This is not a required field however if nothing is passed then no data will be returned.
    Default value is an empty array.


## VALID TYPES:
### number:
- This will return a random number for every entry.
- Returns is of type Number.

#### OPTIONS:
max:
- Number
- This will set the maximum number you can recieve.
Default value is 500.

min:
- Number
- This will set the maximum number you can recieve.
Default value is 0.

sequential:
- Boolean
- If this option is set to true, the returned column will be in 
sequential order starting from the min value.
Overrides max.
Default value is false.

### stringNumber:
- This will return a number that is of a String type.
- Return is of type String.

#### OPTIONS:
maxLength:
- Integer
- This will set the maximum length of the returned string value.
Default is 10.

fixedLength:
- Integer
- This will set the output to a fixed length string value based
on the number provided.
Overrides maxLength.
No default value.

padWithZeros:
- Integer
- This will pad the left side of the string with zeros based on the
number provided.
Default value is 0.

### fullName:
- This will return a random full name complete with a first name and last name.
- Return is of type String.

#### NO OPTIONS.

### date:
- This will return either a random date in a format based on the options specified.
Return can be either of type String or of type Date.
Default return is of type String.

#### OPTIONS:
startDate:
- Date
- Optionally set the minimum date that can be returned.
Default value is Date(2012, 0, 1)

endDate:
- Date
- Optionally set the maximum date that can be returned.
Default value is Date()

dateOnly:
- Boolean
- Sets whether or not you want to only include the weekday day month and year
in the return value.
Default value is false.

words:
- Boolean
- This will make it so that instead of recieving numbers for days and months,
you will recieve the words that correspond to those numbers where applicable.
Default value is false.

timeOnly:
- Boolean
- This will set it so you only recieve the hours minutes seconds and AM or PM
in the return value.
Default value is false.

yearOnly:
- Boolean
- This will set it so you only recieve the year
in the return value.
Default value is false.

monthOnly:
- Boolean
- This will set it so you only recieve the month
in the return value.
Default value is false.

dayOnly:
- Boolean
- This will set it so you only recieve the day of the month
in the return value.
Default value is false.

weekDayOnly:
- Boolean
--This will set it so you only recieve the weekday as a word
in the return value.
Default value is false.

hoursOnly:
- Boolean
- This will set it so you only recieve the hour and AM or PM
in the return value.
Default value is false.

minutesOnly:
- Boolean
- This will set it so you only recieve the minutes
in the return value.
Default value is false.

secondsOnly:
- Boolean
- This will set it so you only recieve the seconds
in the return value.
Default value is false.

timeZoneOnly:
- Boolean
- This will set it so you only recieve the current time zone
in the return value.
Default value is false.

specific:
- Boolean
- Used in conjuction with the timeZoneOnly option. When set to true,
the time zone returned will be as specific as possible.
Default value is false.

noSeconds:
- Boolean
- Omits the seconds value from any applicable return format.
Default value is false.

noAMPM:
- Boolean
- Omits the AM or PM value from any applicable return format.
Default value is false.

dateType:
- Boolean
- When set to true, the returned value will be of type Date.
This only works when no other options are set that alter the format
of the returned date.
Default value is false.

### boolean:
- This will return a random boolean value of either true or false.
Return is either of type String, type Boolean, or type Number.
Default return type is String.

#### OPTIONS:
boolType:
- Boolean
--This will make the return value of type Boolean.
Default value is false;

numberType:
- Boolean
- This will make the return value of type Number.
The return value will either be a 0 or a 1.
Default value is false;

### string:
- This will return a random string based on a collection of words
that can either be provided by the user through an option or will
be derived from a built in list of 50 random nouns.
- Return is of type string.

#### OPTIONS:
randomStringCollection:
- Array
- This is a supplied list of random words to pick from.
Default value is set to built in random nouns list.

useTechNouns:
- Boolean
- Setting this option will use a random list of technology
related words.
This option will override randomStringCollection and useTechManufacturers.
Default value is false.

useTechManufacturers:
- Boolean
- Setting this option will use a random list of technology manufacturers.
This option will override randomStringCollection.
Default value is false.


## EXAMPLE USAGE:

### INPUT:

    randomTableData({
        amountOfEntries: 8,
        headerTypes: [{
          type: 'stringNumber',
          fixedLength: 8,
          padWithZeros: 4,
        },
        {
          type: 'number',
          min: 10,
          sequential: true,
        },
        {
          type: 'date',
          dateOnly: true,
          words: true,
        },
        {
          type: 'fullName',
        }],
    })

### OUTPUT:

    [
      [ '000009373738', 10, 'Monday, December 28, 2020', 'Joseph Kennedy' ],
      [ '000099345481', 11, 'Tuesday, July 21, 2015', 'Camila Alexander' ],
      [ '000074214251', 12, 'Tuesday, March 13, 2018', 'Hudson Freeman' ],
      [ '000077775583', 13, 'Wednesday, July 15, 2020', 'Evelyn Burns' ],
      [ '000032442772', 14, 'Sunday, January 27, 2019', 'Lucas Hawkins' ],
      [ '000009995287', 15, 'Sunday, January 31, 2016', 'Ava Holmes' ],
      [ '000023053168', 16, 'Tuesday, November 24, 2015', 'Sophia Foster' ],
      [ '000020248980', 17, 'Sunday, January 10, 2021', 'Noah Palmer' ]
    ]


## ERROR EXPLANATIONS:

"There was a problem with type checking in randomTableData.":
- This error is thrown when an invalid type is provided in the "type"
    field in one of the headerType option objects. Valid types can be found above.

"No key names provided.":
- This error is thrown when the "outputType" field is set to 'objects' and the
    "keyNames" field is set to either an empty array, an empty object, or an invalid value.
    Valid input for this field is either an array or any object schema (Values provided do not matter
    in this case, as all that is required are the keys.), anything else will trigger an error.

"Wrong output type.":
- This error is thrown when an invalid input for the "outputType" option is provided.
    Valid options are 'objects' or 'arrays'.


### DEVCHECK ERRORS.

"Invalid input on headerTypes. Please pass an array of objects.":
- This error is thrown when an the "headerTypes" field has invalid input. It needs to be an array
of objects. Each object needs a "type" field and signifies a column.

"??? is not a valid header field.":
- This error is thrown when an invalid option is provided for one of the headerTypes.
Valid options can be found above.

"There was no type specified on item ??? in headerTypes.":
- This error is thrown when a "type" field is not provided for one of the header types.
The "type" field is required and signifies what kind of output you want to recieve in that column.

"??? is not a valid type.":
- This error is thrown when an invalid type is provided on the "type" field of one of the
headerTypes. A list of valid types can be found above.