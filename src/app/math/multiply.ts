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
 * import { multiply } from 'main-fns';
 *
 * const numbers = [3, 1, 5];
 * console.log(multiply(numbers)); // 15
 */
export function multiply(...numbers: number[]): number {
    return numbers.reduce((acc: number, number: number) => acc * number, 1);
}
