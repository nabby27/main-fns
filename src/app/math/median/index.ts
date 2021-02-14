import { MedianOwn } from './impl/medianOwn';
import { MedianFunction } from './util/median.function';

/**
 *
 * @memberof module:Math
 * @function median
 *
 * @description Returns the median from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The median
 *
 * @example
 * const numbers = [3, 1, 5]
 * console.log(median(numbers)) // 3
 */
export function median(...numbers: number[]): number {
    return new MedianFunction(new MedianOwn()).median(numbers);
}
