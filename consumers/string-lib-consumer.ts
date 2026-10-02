// import { StringLib } from "../dist/string-lib";

// console.log(StringLib.ordinalize(1)); // "1st"
// console.log(StringLib.ordinalize(2)); // "2nd"
// console.log(StringLib.ordinalize(3)); // "3rd"
// console.log(StringLib.ordinalize(4)); // "4th"

// import { StringLib } from "../lib/string-lib-js.js";

// console.log(StringLib.ordinalize(1)); // "1st"
// console.log(StringLib.ordinalize(2)); // "2nd"
// console.log(StringLib.ordinalize(3)); // "3rd"
// console.log(StringLib.ordinalize(4)); // "4th"


// /// <reference path="../lib/string-lib-js-global.d.ts" /> 
// const myOrdinal = 1;
// console.log(window.StringLib.ordinalize(myOrdinal)); // "1st"

/// <reference path="../lib/string-lib-js-extending.d.ts" /> 
const myOrdinal = 1;
console.log(myOrdinal.toString().ordinalize()); // "1st"