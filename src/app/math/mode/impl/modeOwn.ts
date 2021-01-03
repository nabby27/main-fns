import { Mode } from '../util/mode.interface';

export class ModeOwn implements Mode {

  mode(numbers: number[]): number[] {
    const modes: number[] = [];
    const count: {[number: number]: number} = {};
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

}
