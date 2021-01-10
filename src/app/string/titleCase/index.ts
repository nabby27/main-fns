import { TitleCaseOwn } from './impl/titleCaseOwn';
import { TitleCaseFunction } from './util/titleCase.function';

/**
 *
 * Returns the titleCase text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The titleCase text
 *
 * @example
 * const text = 'Hello world'
 * console.log(titleCase(text)) // 'Hello World'
 */
export function titleCase(text: string): string {
  return new TitleCaseFunction(new TitleCaseOwn()).execute(text);
}
