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
 * import { lastLetters } from 'main-fns';
 *
 * const text = 'Hello world';
 * console.log(lastLetters(text, 3)); // 'rld'
 */
export function lastLetters(text: string, numberOfLetters = 1): string {
    const textLowerCase = text.toLowerCase();

    return textLowerCase.slice(-numberOfLetters);
}
