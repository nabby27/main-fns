import { KebabCaseOwn } from './impl/kebabCaseOwn';
import { KebabCaseFunction } from './util/kebabCase.function';

/**
 *
 * Returns the kebab case text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The kebab case text
 */
export function kebabCase(text: string): string {
  return new KebabCaseFunction(new KebabCaseOwn()).execute(text);
}
