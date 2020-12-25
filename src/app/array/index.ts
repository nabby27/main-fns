/**
 * @module Array
 */

/**
 *
 * Returns the first item of the array
 *
 * @template T
 * @param {!T[]} array - The array in which to return the first element
 * @returns {T} The first element
 */
export function first<T>(array: T[]): T {
  return array[0];
}
