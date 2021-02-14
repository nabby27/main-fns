import { MinOwn } from './impl/minOwn';
import { MinFunction } from './util/min.function';

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
 * const numbers = [3, 1, 5]
 * console.log(min(numbers)) // 1
 */
export function min(...numbers: number[]): number {
    return new MinFunction(new MinOwn()).min(numbers);
}
