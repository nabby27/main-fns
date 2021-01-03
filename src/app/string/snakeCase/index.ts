import { SnakeCaseVoca } from './impl/snakeCaseVoca';
import { SnakeCaseFunction } from './util/snakeCase.function';

/**
 *
 * Returns the snake case text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The snake case text
 */
export function snakeCase(text: string): string {
  return new SnakeCaseFunction(new SnakeCaseVoca()).snakeCase(text);
}
