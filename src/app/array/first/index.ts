import { FirstOwn } from './impl/firstOwn';
import { FirstFunction } from './util/first.function';

/**
 *
 * Returns the first element of the array
 *
 * @template T
 * @param {!T[]} array - The array
 * @returns {T} The first element
 */
export function first<T>(array: T[]): T {
  return new FirstFunction(new FirstOwn()).first(array);
}
