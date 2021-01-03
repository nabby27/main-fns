import { ModeOwn } from './impl/modeOwn';
import { ModeFunction } from './util/mode.function';

/**
 *
 * Returns the mode from numbers
 *
 * @param {!number[]} numbers - The numbers
 * @returns {number} The mode
 */
export function mode(...numbers: number[]): number[] {
  return new ModeFunction(new ModeOwn()).mode(numbers);
}
