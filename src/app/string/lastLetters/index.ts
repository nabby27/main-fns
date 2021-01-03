import { LastLettersVoca } from './impl/lastLettersVoca';
import { LastLettersFunction } from './util/lastLetters.function';

/**
 *
 * Returns the last letters from text
 *
 * @param {!string} text - The text
 * @param {number} [numberOfLetters=1] - The number of letters, by default is `1`
 * @returns {strign} The last letters
 */
export function lastLetters(text: string, numberOfLetters = 1): string {
  return new LastLettersFunction(new LastLettersVoca()).lastLetters(text, numberOfLetters);
}
