/**
 *
 * @memberof module:Array
 * @function first
 *
 * @description Returns the first element of the array
 *
 * @template T
 * @param {!T[]} array - The array
 * @returns {T} The first element
 *
 * @example
 * import { first } from 'main-fns';
 *
 * const numbers = [3, 1, 5];
 * console.log(first(numbers)); // 3
 */
export function first<T>(array: T[]): T {
    return array[0];
}
