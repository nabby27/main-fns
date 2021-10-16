/**
 *
 * @memberof module:Math
 * @function mode
 *
 * @description Returns the mode from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The mode
 *
 * @example
 * import { mode } from 'main-fns';
 *
 * const numbers = [3, 1, 5, 1];
 * console.log(mode(numbers)); // [1]
 */
export function mode(...numbers: number[]): number[] {
    const modes: number[] = [];
    const count: { [number: number]: number } = {};
    let maxRepeat = 0;

    numbers.forEach((number: number) => {
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxRepeat) {
            maxRepeat = count[number];
        }
    });

    for (const number in count) {
        if (count[number] === maxRepeat) {
            modes.push(Number(number));
        }
    }

    return modes;
}
