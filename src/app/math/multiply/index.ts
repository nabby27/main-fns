import { MultiplyOwn } from './impl/multiplyOwn';
import { MultiplyFunction } from './util/multiply.function';

/**
 *
 * @memberof module:Math
 * @function multiply
 *
 * @description Returns the product from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The product
 *
 * @example
 * const numbers = [3, 1, 5]
 * console.log(multiply(numbers)) // 15
 */
export function multiply(...numbers: number[]): number {
    return new MultiplyFunction(new MultiplyOwn()).multiply(numbers);
}
