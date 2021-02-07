import { CamelCaseOwn } from './impl/camelCaseOwn';
import { CamelCaseFunction } from './util/camelCase.function';

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
 * const text = 'Hello world'
 * console.log(camelCase(text)) // 'helloWorld'
 */
export function camelCase(text: string): string {
  return new CamelCaseFunction(new CamelCaseOwn()).execute(text);
}
