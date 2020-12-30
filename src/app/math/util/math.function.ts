import { MathUtil } from './math.util.interface';

export class MathFunctions {

  constructor(private mathUtilImpl: MathUtil) { }

  max(numbers: number[]): number {
    return this.mathUtilImpl.max(numbers);
  }

  min(numbers: number[]): number {
    return this.mathUtilImpl.min(numbers);
  }

  sum(numbers: number[]): number {
    return this.mathUtilImpl.sum(numbers);
  }

}
