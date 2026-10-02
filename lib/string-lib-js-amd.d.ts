/** 
 * @name stringLib
 * @description AMD module for string utilities, providing functions like ordinalize.
 * @module stringLib
 */

declare module './string-lib-js-amd';

/**
 * @name version
 * @description The version of the stringLib module.
 */

export const version: string = '1.0.0';

/**
 * @name ordinalize
 * @description Converts a number to its ordinal string representation (e.g., 1 -> "1st", 2 -> "2nd").
 * @param ordinal The number or string to be converted to its ordinal representation.
 * @returns The ordinal string representation of the input number or string.
 */
export function ordinalize(ordinal: string | number): string;