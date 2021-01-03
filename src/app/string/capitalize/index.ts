import { CapitalizeVoca } from './impl/capitalizeVoca';
import { CapitalizeFunction } from './util/capitalize.function';

/**
 *
 * Returns the capitalized text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The capitalized text
 */
export function capitalize(text: string): string {
  return new CapitalizeFunction(new CapitalizeVoca()).capitalize(text);
}
