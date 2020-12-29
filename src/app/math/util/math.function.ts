import { MathUtil } from './math.util.interface';

export class MathFunctions {

  constructor(private mathUtilImpl: MathUtil) { }

  min(numbers: number[]): number {
    return this.mathUtilImpl.min(numbers);
  }

}
