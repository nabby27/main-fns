/**
 *
 * @memberof module:Math
 * @function mean
 *
 * @description Returns the mean from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The mean
 *
 * @example
 * import { mean } from 'main-fns';
 *
 * const numbers = [3, 1, 5];
 * console.log(mean(numbers)); // 4.5
 */
export function mean(...numbers: number[]): number {
    const sum = numbers.reduce((acc: number, number: number) => acc + number, 0);

    return sum / numbers.length;
}
