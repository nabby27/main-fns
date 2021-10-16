/**
 *
 * @memberof module:Math
 * @function median
 *
 * @description Returns the median from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The median
 *
 * @example
 * import { median } from 'main-fns';
 *
 * const numbers = [3, 1, 5];
 * console.log(median(numbers)); // 3
 */
export function median(...numbers: number[]): number {
    if (0 === numbers.length) {
        return 0;
    }

    const half = Math.floor(numbers.length / 2);
    const numbersOrdered = numbers.sort();

    if (0 === numbers.length % 2) {
        return (numbersOrdered[half - 1] + numbersOrdered[half]) / 2.0;
    }

    return numbersOrdered[half];
}
