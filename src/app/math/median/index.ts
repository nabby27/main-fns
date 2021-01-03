import { MedianOwn } from './impl/medianOwn';
import { MedianFunction } from './util/median.function';

/**
 *
 * Returns the median from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The median
 */
export function median(...numbers: number[]): number {
  return new MedianFunction(new MedianOwn()).median(numbers);
}
