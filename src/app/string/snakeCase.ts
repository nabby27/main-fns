/**
 *
 * @memberof module:String
 * @function snakeCase
 *
 * @description Returns the snakeCase text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The snakeCase text
 *
 * @example
 * import { snakeCase } from 'main-fns';
 *
 * const text = 'Hello world';
 * console.log(snakeCase(text)); // 'hello_world'
 */
export function snakeCase(text: string): string {
    return text.toLowerCase().replace(/\s/g, '_');
}
