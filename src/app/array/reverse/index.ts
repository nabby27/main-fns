import { ReverseOwn } from './impl/reverseOwn';
import { ReverseFunction } from './util/reverse.function';

/**
 *
 * Returns the array reversed
 *
 * @template T
 * @param {!T[]} array - The array
 * @returns {T[]} The array reversed
 */
export function reverse<T>(array: T[]): T[] {
  return new ReverseFunction(new ReverseOwn()).reverse(array);
}
