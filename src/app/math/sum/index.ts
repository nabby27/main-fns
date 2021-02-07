import { SumOwn } from './impl/sumOwn';
import { SumFunction } from './util/sum.function';

/**
 *
 * @memberof module:Math
 * @function sum
 *
 * @description Returns the sum from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The sum
 *
 * @example
 * const numbers = [3, 1, 5]
 * console.log(sum(numbers)) // 9
 */
export function sum(...numbers: number[]): number {
  return new SumFunction(new SumOwn()).sum(numbers);
}
