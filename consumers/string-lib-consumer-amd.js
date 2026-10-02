//way 1
define(['../lib/string-lib-js-amd'], function (stringLib) {
    console.log(stringLib.ordinalize(1)); // "1st"
    console.log(stringLib.ordinalize(2)); // "2nd"
    console.log(stringLib.ordinalize(3)); // "3rd"
    console.log(stringLib.ordinalize(4)); // "4th"
});

//way 2
require(['../lib/string-lib-js-amd'], function (stringLib) {
    console.log(stringLib.ordinalize(1)); // "1st"
    console.log(stringLib.ordinalize(2)); // "2nd"
    console.log(stringLib.ordinalize(3)); // "3rd"
    console.log(stringLib.ordinalize(4)); // "4th"
});

//way3
const stringLib = require('../lib/string-lib-js-amd');
console.log(stringLib.ordinalize(1)); // "1st"
console.log(stringLib.ordinalize(2)); // "2nd"
console.log(stringLib.ordinalize(3)); // "3rd"
console.log(stringLib.ordinalize(4)); // "4th"