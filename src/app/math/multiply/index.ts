import { MultiplyOwn } from './impl/multiplyOwn';
import { MultiplyFunction } from './util/multiply.function';

/**
 *
 * Returns the product from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The product
 */
export function multiply(...numbers: number[]): number {
  return new MultiplyFunction(new MultiplyOwn()).multiply(numbers);
}
