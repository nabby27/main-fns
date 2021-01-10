import { PascalCaseOwn } from './impl/pascalCaseOwn';
import { PascalCaseFunction } from './util/pascalCase.function';

/**
 *
 * Returns the pascal case text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The pascal case text
 */
export function pascalCase(text: string): string {
  return new PascalCaseFunction(new PascalCaseOwn()).execute(text);
}
