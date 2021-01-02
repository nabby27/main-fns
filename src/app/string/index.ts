import { StringUtilVoca } from './impl/stringUtilVoca';
import { StringFunctions } from './util/string.function';

/**
 * @module String
 */

/**
 *
 * Returns the camel case text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The camel case  text
 */
export function camelCase(text: string): string {
  return new StringFunctions(new StringUtilVoca()).camelCase(text);
}

/**
 *
 * Returns the capitalized text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The capitalized text
 */
export function capitalize(text: string): string {
  return new StringFunctions(new StringUtilVoca()).capitalize(text);
}

/**
 *
 * Returns the first letters from text
 *
 * @param {!string} text - The text
 * @param {number} [numberOfLetters=1] - The number of letters, by default is `1`
 * @returns {strign} The first letters
 */
export function firstLetters(text: string, numberOfLetters = 1): string {
  return new StringFunctions(new StringUtilVoca()).firstLetters(text, numberOfLetters);
}

/**
 *
 * Returns the kebab case text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The kebab case text
 */
export function kebabCase(text: string): string {
  return new StringFunctions(new StringUtilVoca()).kebabCase(text);
}

/**
 *
 * Returns the last letters from text
 *
 * @param {!string} text - The text
 * @param {number} [numberOfLetters=1] - The number of letters, by default is `1`
 * @returns {strign} The last letters
 */
export function lastLetters(text: string, numberOfLetters = 1): string {
  return new StringFunctions(new StringUtilVoca()).lastLetters(text, numberOfLetters);
}

/**
 *
 * Returns the lower case text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The lower case text
 */
export function lowerCase(text: string): string {
  return new StringFunctions(new StringUtilVoca()).lowerCase(text);
}

/**
 *
 * Returns the snake case text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The snake case text
 */
export function snakeCase(text: string): string {
  return new StringFunctions(new StringUtilVoca()).snakeCase(text);
}

/**
 *
 * Returns the title case text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The title case text
 */
export function titleCase(text: string): string {
  return new StringFunctions(new StringUtilVoca()).titleCase(text);
}

/**
 *
 * Returns the upper case text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The upper case text
 */
export function upperCase(text: string): string {
  return new StringFunctions(new StringUtilVoca()).upperCase(text);
}
