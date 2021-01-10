import { PascalCaseOwn } from './impl/pascalCaseOwn';
import { PascalCaseFunction } from './util/pascalCase.function';

/**
 *
 * Returns the pascalCase text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The pascalCase text
 *
 * @example
 * const text = 'Hello world'
 * console.log(pascalCase(text)) // 'HelloWorld'
 */
export function pascalCase(text: string): string {
  return new PascalCaseFunction(new PascalCaseOwn()).execute(text);
}
