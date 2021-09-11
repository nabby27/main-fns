import { MeanOwn } from './impl/meanOwn';
import { MeanFunction } from './util/mean.function';

/**
 *
 * @memberof module:Math
 * @function mean
 *
 * @description Returns the mean from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The mean
 *
 * @example
 * import { mean } from 'main-fns';
 *
 * const numbers = [3, 1, 5];
 * console.log(mean(numbers)); // 4.5
 */
export function mean(...numbers: number[]): number {
    return new MeanFunction(new MeanOwn()).mean(numbers);
}
