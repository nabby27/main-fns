import { MaxOwn } from './impl/maxOwn';
import { MaxFunction } from './util/max.function';

/**
 *
 * @memberof module:Math
 * @function max
 *
 * @description Returns the biggest number from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The biggest number
 *
 * @example
 * import { max } from 'main-fns';
 *
 * const numbers = [3, 1, 5];
 * console.log(max(numbers)); // 5
 */
export function max(...numbers: number[]): number {
    return new MaxFunction(new MaxOwn()).max(numbers);
}
