/**
 * @name StringLib
 * @description Provides utility functions for working with strings, such as ordinalizing numbers.
 * @version 1.0.0
 * @author Your Name
 * @license MIT
 * @example
 * console.log(window.StringLib.ordinalize(1)); // "1st"
 * console.log(window.StringLib.ordinalize(2)); // "2nd"
 * console.log(window.StringLib.ordinalize(3)); // "3rd"
 * console.log(window.StringLib.ordinalize(4)); // "4th"
 */

//Why use a namespace declaration for StringLib? 
//This allows TypeScript to understand the shape of the global StringLib object and provides type checking 
// and IntelliSense support.
declare namespace StringLib {
    /**
     * Converts a number or string into its ordinal form (e.g., 1 -> "1st", 2 -> "2nd").
     * @param ordinal The number or string to be ordinalized.
     * @returns The ordinalized string representation of the input number or string.    
     */
    function ordinalize(ordinal: string | number): string;
}
