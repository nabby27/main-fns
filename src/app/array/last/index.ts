import { LastOwn } from './impl/lastOwn';
import { LastFunction } from './util/last.function';

/**
 *
 * Returns the last element of the array
 *
 * @template T
 * @param {!T[]} array - The array
 * @returns {T} The last element
 */
export function last<T>(array: T[]): T {
  return new LastFunction(new LastOwn()).last(array);
}