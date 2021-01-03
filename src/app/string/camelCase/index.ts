import { CamelCaseVoca } from './impl/camelCaseVoca';
import { CamelCaseFunction } from './util/camelCase.function';

/**
 *
 * Returns the camel case text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The camel case  text
 */
export function camelCase(text: string): string {
  return new CamelCaseFunction(new CamelCaseVoca()).camelCase(text);
}
