import { FirstLettersOwn } from './impl/firstLettersOwn';
import { FirstLettersFunction } from './util/firstLetters.function';

/**
 *
 * @memberof module:String
 * @function firstLetters
 *
 * @description Returns the first letters from text
 *
 * @param {!string} text - The text
 * @param {number} [numberOfLetters=1] - The number of letters, by default is `1`
 * @returns {strign} The first letters
 *
 * @example
 * const text = 'Hello world'
 * console.log(firstLetters(text, 3)) // 'Hel'
 */
export function firstLetters(text: string, numberOfLetters = 1): string {
    return new FirstLettersFunction(new FirstLettersOwn()).execute(text, numberOfLetters);
}
