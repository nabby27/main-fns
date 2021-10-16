/**
 *
 * @memberof module:Math
 * @function min
 *
 * @description Returns the smallest number from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The smallest number
 *
 * @example
 * import { min } from 'main-fns';
 *
 * const numbers = [3, 1, 5];
 * console.log(min(numbers)); // 1
 */
export function min(...numbers: number[]): number {
    return Math.min(...numbers);
}
