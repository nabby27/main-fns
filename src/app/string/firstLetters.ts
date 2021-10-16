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
 * import { firstLetters } from 'main-fns';
 *
 * const text = 'Hello world';
 * console.log(firstLetters(text, 3)); // 'Hel'
 */
export function firstLetters(text: string, numberOfLetters = 1): string {
    const textLowerCase = text.toLowerCase();

    return textLowerCase.substring(0, numberOfLetters);
}
