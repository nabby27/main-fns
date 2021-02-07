import { UpperCaseOwn } from './impl/upperCaseOwn';
import { UpperCaseFunction } from './util/upperCase.function';

/**
 *
 * @memberof module:String
 * @function upperCase
 *
 * @description Returns the upperCase text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The upperCase text
 *
 * @example
 * const text = 'Hello world'
 * console.log(upperCase(text)) // 'HELLO WORLD'
 */
export function upperCase(text: string): string {
  return new UpperCaseFunction(new UpperCaseOwn()).execute(text);
}
