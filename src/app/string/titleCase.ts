/**
 *
 * @memberof module:String
 * @function titleCase
 *
 * @description Returns the titleCase text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The titleCase text
 *
 * @example
 * import { titleCase } from 'main-fns';
 *
 * const text = 'Hello world';
 * console.log(titleCase(text)); // 'Hello World'
 */
export function titleCase(text: string): string {
    const textLowerCase = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    return textLowerCase.replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => ' ' + chr.toUpperCase());
}
