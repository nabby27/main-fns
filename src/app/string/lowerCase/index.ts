import { LowerCaseVoca } from './impl/lowerCaseVoca';
import { LowerCaseFunction } from './util/lowerCase.function';

/**
 *
 * Returns the lower case text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The lower case text
 */
export function lowerCase(text: string): string {
  return new LowerCaseFunction(new LowerCaseVoca()).lowerCase(text);
}
