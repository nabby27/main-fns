import { MaxOwn } from './impl/maxOwn';
import { MaxFunction } from './util/max.function';

/**
 *
 * Returns the biggest number from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The biggest number
 */
export function max(...numbers: number[]): number {
  return new MaxFunction(new MaxOwn()).max(numbers);
}
