import { FirstLettersVoca } from './impl/firstLettersVoca';
import { FirstLettersFunction } from './util/firstLetters.function';

/**
 *
 * Returns the first letters from text
 *
 * @param {!string} text - The text
 * @param {number} [numberOfLetters=1] - The number of letters, by default is `1`
 * @returns {strign} The first letters
 */
export function firstLetters(text: string, numberOfLetters = 1): string {
  return new FirstLettersFunction(new FirstLettersVoca()).firstLetters(text, numberOfLetters);
}
