/**
 * Type declaration file for the StringLib ECMAScript Module (ESM) version.
 * Provides type definitions for the StringLib ESM module, including the version and ordinalize function.
 * @name StringLib
 * @module string-lib-js-esm
 * @default export StringLib
 * Usage:
 * ```ts
 * import { StringLib } from "string-lib-js-esm";
 * console.log(StringLib.ordinalize(1)); // "1st"
 * ```
 */

declare namespace StringLib {
    const version: string;
    /**
     * Converts a number or string to its ordinal representation.
     * @param {number | string} ordinal The number or string to be ordinalized.
     * @returns {string} The ordinal representation of the input number or string.
     */
    function ordinalize(ordinal: number | string): string;
}

export default StringLib;