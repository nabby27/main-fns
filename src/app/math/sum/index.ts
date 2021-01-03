import { SumOwn } from './impl/sumOwn';
import { SumFunction } from './util/sum.function';

/**
 *
 * Returns the sum from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The sum
 */
export function sum(...numbers: number[]): number {
  return new SumFunction(new SumOwn()).sum(numbers);
}
