import { ModeOwn } from './impl/modeOwn';
import { ModeFunction } from './util/mode.function';

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
    return new ModeFunction(new ModeOwn()).mode(numbers);
}
