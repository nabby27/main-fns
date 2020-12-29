import { ArrayUtilLodash } from './impl/arrayUtilLodash';
import { ArrayFunctions } from './util/array.function';

/**
 * @module Array
 */

/**
 *
 * Returns the first element of the array
 *
 * @template T
 * @param {!T[]} array - The array
 * @returns {T} The first element
 */
export function first<T>(array: T[]): T {
  return new ArrayFunctions(new ArrayUtilLodash()).first(array);
}

/**
 *
 * Returns the last element of the array
 *
 * @template T
 * @param {!T[]} array - The array
 * @returns {T} The last element
 */
export function last<T>(array: T[]): T {
  return new ArrayFunctions(new ArrayUtilLodash()).last(array);
}

/**
 *
 * Returns the array reversed
 *
 * @template T
 * @param {!T[]} array - The array
 * @returns {T[]} The array reversed
 */
export function reverse<T>(array: T[]): T[] {
  return new ArrayFunctions(new ArrayUtilLodash()).reverse(array);
}