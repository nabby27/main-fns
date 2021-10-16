/**
 *
 * @memberof module:String
 * @function lowerCase
 *
 * @description Returns the lowerCase text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The lowerCase text
 *
 * @example
 * import { lowerCase } from 'main-fns';
 *
 * const text = 'Hello world';
 * console.log(lowerCase(text)); // 'hello world'
 */
export function lowerCase(text: string): string {
    return text.toLowerCase();
}
