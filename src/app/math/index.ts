import { MathUtilOwn } from './impl/mathUtilOwn';
import { MathFunctions } from './util/math.function';

/**
 * @module Math
 */

/**
 *
 * Returns the biggest number from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The biggest number
 */
export function max(...numbers: number[]): number {
  return new MathFunctions(new MathUtilOwn()).max(numbers);
}

/**
 *
 * Returns the mean from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The mean
 */
export function mean(...numbers: number[]): number {
  return new MathFunctions(new MathUtilOwn()).mean(numbers);
}

/**
 *
 * Returns the median from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The median
 */
export function median(...numbers: number[]): number {
  return new MathFunctions(new MathUtilOwn()).median(numbers);
}

/**
 *
 * Returns the smallest number from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The smallest number
 */
export function min(...numbers: number[]): number {
  return new MathFunctions(new MathUtilOwn()).min(numbers);
}

/**
 *
 * Returns the mode from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The mode
 */
export function mode(...numbers: number[]): number[] {
  return new MathFunctions(new MathUtilOwn()).mode(numbers);
}

/**
 *
 * Returns the product from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The product
 */
export function multiply(...numbers: number[]): number {
  return new MathFunctions(new MathUtilOwn()).multiply(numbers);
}

/**
 *
 * Returns the sum from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The sum
 */
export function sum(...numbers: number[]): number {
  return new MathFunctions(new MathUtilOwn()).sum(numbers);
}
