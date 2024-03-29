/**
 *
 * @memberof module:Array
 * @function reverse
 *
 * @description Returns the array reversed
 *
 * @template T
 * @param {!T[]} array - The array
 * @returns {T[]} The array reversed
 *
 * @example
 * import { reverse } from 'main-fns';
 *
 * const numbers = [3, 1, 5];
 * console.log(reverse(numbers)); // [5, 1, 3]
 */
export function reverse<T>(array: T[]): T[] {
    return array.reverse();
}
