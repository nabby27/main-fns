/**
 *
 * @memberof module:String
 * @function kebabCase
 *
 * @description Returns the kebabCase text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The kebabCase text
 *
 * @example
 * import { kebabCase } from 'main-fns';
 *
 * const text = 'Hello world';
 * console.log(kebabCase(text)); // 'hello-world'
 */
export function kebabCase(text: string): string {
    return text.toLowerCase().replace(/\s/g, '-');
}
