import { LowerCaseOwn } from './impl/lowerCaseOwn';
import { LowerCaseFunction } from './util/lowerCase.function';

/**
 *
 * Returns the lowerCase text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The lowerCase text
 *
 * @example
 * const text = 'Hello world'
 * console.log(lowerCase(text)) // 'hello world'
 */
export function lowerCase(text: string): string {
  return new LowerCaseFunction(new LowerCaseOwn()).execute(text);
}
