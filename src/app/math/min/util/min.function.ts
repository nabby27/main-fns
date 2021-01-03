import { Min } from './min.interface';

export class MinFunction {

  constructor(private minImpl: Min) { }

  min(numbers: number[]): number {
    return this.minImpl.min(numbers);
  }

}
