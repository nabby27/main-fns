import { OrderByOwn } from './impl/orderByOwn';
import { OrderByFunction } from './util/orderBy.function';

/**
 *
 * @memberof module:Array
 * @function orderBy
 *
 * @description Returns the the array ordered by key
 *
 * @template T
 * @param {!string} key - The key
 * @param {!T[]} array - The array
 * @returns {T[]} The array ordered by key
 *
 * @example
 * const users = [
 *  { id: 2, name: 'Nabby'},
 *  { id: 3, name: 'Ivan'}
 * ]
 * console.log(orderBy('name', users)) // [{ id: 3, name: 'Ivan'}, { id: 2, name: 'Nabby'}]
 * console.log(orderBy('id', users)) // [{ id: 2, name: 'Nabby'}, { id: 3, name: 'Ivan'}]
 */
export function orderBy<T>(key: string, array: T[]): T[] {
  return new OrderByFunction(new OrderByOwn()).orderBy(key, array);
}
