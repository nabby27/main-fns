import { Min } from '../util/min.interface';

export class MinOwn implements Min {

  min(numbers: number[]): number {
    return numbers.reduce((acc: number, number: number) => acc > number ? number : acc);
  }

}
