import { MathUtilComputeIo } from './impl/mathUtilComputeIo';
import { MathFunctions } from './util/math.function';

/**
 * @module Math
 */

/**
 *
 * Returns the smallest number from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The smallest number
 */
export function max(...numbers: number[]): number {
  return new MathFunctions(new MathUtilComputeIo()).max(numbers);
}

/**
 *
 * Returns the smallest number from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The smallest number
 */
export function min(...numbers: number[]): number {
  return new MathFunctions(new MathUtilComputeIo()).min(numbers);
}

/**
 *
 * Returns the sum from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The sum
 */
export function sum(...numbers: number[]): number {
  return new MathFunctions(new MathUtilComputeIo()).sum(numbers);
}
