import { Mean } from '../util/mean.interface';

export class MeanOwn implements Mean {

  mean(numbers: number[]): number {
    const sum = numbers.reduce((acc: number, number: number) => acc + number, 0);

    return sum / numbers.length;
  }

}
