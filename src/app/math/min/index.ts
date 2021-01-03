import { MinOwn } from './impl/minOwn';
import { MinFunction } from './util/min.function';

/**
 *
 * Returns the smallest number from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The smallest number
 */
export function min(...numbers: number[]): number {
  return new MinFunction(new MinOwn()).min(numbers);
}
