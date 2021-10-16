/**
 *
 * @memberof module:String
 * @function pascalCase
 *
 * @description Returns the pascalCase text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The pascalCase text
 *
 * @example
 * import { pascalCase } from 'main-fns';
 *
 * const text = 'Hello world';
 * console.log(pascalCase(text)); // 'HelloWorld'
 */
export function pascalCase(text: string): string {
    const textLowerCase = text.toLowerCase();

    return textLowerCase.charAt(0).toUpperCase() + textLowerCase.slice(1).replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
}
