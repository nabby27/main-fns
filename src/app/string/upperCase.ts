/**
 *
 * @memberof module:String
 * @function upperCase
 *
 * @description Returns the upperCase text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The upperCase text
 *
 * @example
 * import { upperCase } from 'main-fns';
 *
 * const text = 'Hello world';
 * console.log(upperCase(text)); // 'HELLO WORLD'
 */
export function upperCase(text: string): string {
    return text.toUpperCase();
}
