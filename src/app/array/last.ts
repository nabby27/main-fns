/**
 * @memberof module:Array
 * @function last
 *
 * @description Returns the last element of the array
 *
 * @template T
 * @param {!T[]} array - The array
 * @returns {T} The last element
 *
 * @example
 * import { last } from 'main-fns';
 *
 * const numbers = [3, 1, 5];
 * console.log(last(numbers)); // 5
 */
export function last<T>(array: T[]): T {
    return array[array.length - 1];
}
