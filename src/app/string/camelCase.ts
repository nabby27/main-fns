/**
 *
 * @memberof module:String
 * @function camelCase
 *
 * @description Returns the camelCase text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The camelCase  text
 *
 * @example
 * import { camelCase } from 'main-fns';
 *
 * const text = 'Hello world';
 * console.log(camelCase(text)); // 'helloWorld'
 */
export function camelCase(text: string): string {
    return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
}
