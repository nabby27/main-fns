/**
 *
 * @memberof module:String
 * @function capitalize
 *
 * @description Returns the capitalized text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The capitalized text
 *
 * @example
 * import { capitalize } from 'main-fns';
 *
 * const text = 'hello';
 * console.log(capitalize(text)); // 'Hello'
 */
export function capitalize(text: string): string {
    const textLowerCase = text.toLowerCase();

    return textLowerCase.charAt(0).toUpperCase() + textLowerCase.slice(1);
}
