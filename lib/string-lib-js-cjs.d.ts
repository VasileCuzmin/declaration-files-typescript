

declare module "./string-lib-js-cjs";

/**
 * A CommonJS module providing string utility functions.
 * @name stringLib
 * @module string-lib-js-cjs
 * @description Provides utility functions for working with strings, including ordinalization.
 */
export const version: '1.0.0';

/**
 * Converts a number to its ordinal form.
 * @param {string|number} ordinal The number to be converted to its ordinal form.
 * @returns {string} The ordinal form of the given number.
 */

export function ordinalize(ordinal: string | number): string;