import { OrderByOwn } from './impl/orderByOwn';
import { OrderByFunction } from './util/orderBy.function';

/**
 *
 * Returns the the array ordered by key
 *
 * @template T
 * @param {!string} key - The key
 * @param {!T[]} array - The array
 * @returns {T[]} The array ordered by key
 */
export function orderBy<T>(key: string, array: T[]): T[] {
  return new OrderByFunction(new OrderByOwn()).orderBy(key, array);
}
