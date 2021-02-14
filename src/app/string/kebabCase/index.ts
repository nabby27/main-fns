import { KebabCaseOwn } from './impl/kebabCaseOwn';
import { KebabCaseFunction } from './util/kebabCase.function';

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
 * const text = 'Hello world'
 * console.log(kebabCase(text)) // 'hello-world'
 */
export function kebabCase(text: string): string {
    return new KebabCaseFunction(new KebabCaseOwn()).execute(text);
}
