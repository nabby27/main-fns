import { UpperCaseOwn } from './impl/upperCaseOwn';
import { UpperCaseFunction } from './util/upperCase.function';

/**
 *
 * Returns the upper case text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The upper case text
 */
export function upperCase(text: string): string {
  return new UpperCaseFunction(new UpperCaseOwn()).execute(text);
}
