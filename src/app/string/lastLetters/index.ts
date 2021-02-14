import { LastLettersOwn } from './impl/lastLettersOwn';
import { LastLettersFunction } from './util/lastLetters.function';

/**
 *
 * @memberof module:String
 * @function lastLetters
 *
 * @description Returns the last letters from text
 *
 * @param {!string} text - The text
 * @param {number} [numberOfLetters=1] - The number of letters, by default is `1`
 * @returns {strign} The last letters
 *
 * @example
 * const text = 'Hello world'
 * console.log(lastLetters(text, 3)) // 'rld'
 */
export function lastLetters(text: string, numberOfLetters = 1): string {
    return new LastLettersFunction(new LastLettersOwn()).execute(text, numberOfLetters);
}
