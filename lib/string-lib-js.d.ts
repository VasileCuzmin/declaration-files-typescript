
//can be manually created to provide type information for the JavaScript implementation
// or even edited if the compiler generates incorrect type information


/**
 * StringLib provides utility functions for working with strings, such as ordinalizing numbers.
 * @version 1.0.0
 * @author Your Name
 * @description Provides utility functions for working with strings, such as ordinalizing numbers.
 * @since 1.0.0
 * @license MIT
 * @example
 * console.log(StringLib.ordinalize(1)); // "1st"
 * console.log(StringLib.ordinalize(2)); // "2nd"
 * console.log(StringLib.ordinalize(3)); // "3rd"
 * console.log(StringLib.ordinalize(4)); // "4th"
 */

export declare class StringLib {
    static version: string;
    static private suffixes: Map<string, string>;

    /**
     * Ordinalizes the given number or string representation of a number.
     * @param ordinal The number or string representation of a number to ordinalize.
     * @returns The ordinalized string representation of the input number.
     */
    static ordinalize(ordinal: string | number): string;
}
//# sourceMappingURL=string-lib-js.d.ts.map