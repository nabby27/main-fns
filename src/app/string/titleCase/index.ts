import { TitleCaseVoca } from './impl/titleCaseVoca';
import { TitleCaseFunction } from './util/titleCase.function';

/**
 *
 * Returns the title case text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The title case text
 */
export function titleCase(text: string): string {
  return new TitleCaseFunction(new TitleCaseVoca()).titleCase(text);
}
