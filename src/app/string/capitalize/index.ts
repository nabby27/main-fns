import { CapitalizeOwn } from './impl/capitalizeOwn';
import { CapitalizeFunction } from './util/capitalize.function';

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
 * const text = 'hello'
 * console.log(capitalize(text)) // 'Hello'
 */
export function capitalize(text: string): string {
  return new CapitalizeFunction(new CapitalizeOwn()).execute(text);
}
