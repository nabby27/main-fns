import { MeanOwn } from './impl/meanOwn';
import { MeanFunction } from './util/mean.function';

/**
 *
 * Returns the mean from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The mean
 */
export function mean(...numbers: number[]): number {
  return new MeanFunction(new MeanOwn()).mean(numbers);
}
