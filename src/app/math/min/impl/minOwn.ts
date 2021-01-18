import { Min } from '../util/min.interface';

export class MinOwn implements Min {

  min(numbers: number[]): number {
    return Math.min(...numbers);
  }

}
