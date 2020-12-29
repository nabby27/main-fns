import { MathUtilMathJs } from './impl/mathUtilMathJs';
import { MathFunctions } from './util/math.function';

/**
 * @module Math
 */

/**
 *
 * Returns the smallest number in the array
 *
 * @param {!number[]} numbers - The array of numbers
 * @returns {number} The smallest number
 */
export function min(...numbers: number[]): number {
  return new MathFunctions(new MathUtilMathJs()).min(numbers);
}
