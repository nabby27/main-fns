import { SnakeCaseOwn } from './impl/snakeCaseOwn';
import { SnakeCaseFunction } from './util/snakeCase.function';

/**
 *
 * Returns the snakeCase text from text
 *
 * @param {!string} text - The text
 * @returns {strign} The snakeCase text
 *
 * @example
 * const text = 'Hello world'
 * console.log(snakeCase(text)) // 'hello_world'
 */
export function snakeCase(text: string): string {
  return new SnakeCaseFunction(new SnakeCaseOwn()).execute(text);
}
