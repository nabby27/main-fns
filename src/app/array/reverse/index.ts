import { ReverseOwn } from './impl/reverseOwn';
import { ReverseFunction } from './util/reverse.function';

/**
 *
 * Returns the array reversed
 *
 * @template T
 * @param {!T[]} array - The array
 * @returns {T[]} The array reversed
 *
 * @example
 * const numbers = [3, 1, 5]
 * console.log(reverse(numbers)) // [5, 1, 3]
 */
export function reverse<T>(array: T[]): T[] {
  return new ReverseFunction(new ReverseOwn()).reverse(array);
}
