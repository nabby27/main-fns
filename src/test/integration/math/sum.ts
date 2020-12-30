import { MathFunctions } from '../../../app/math/util/math.function';
import { MathUtil } from '../../../app/math/util/math.util.interface';

export class SumTest {

  data: {
    array: number[];
    expect: number;
  }[] = [
    {
      array: [3, 1, 2],
      expect: 6
    },
    {
      array: [4, 6, 2, 5],
      expect: 17
    }
  ];

  constructor(private mathUtilImpl: MathUtil) {}

  runTest(): void {
    describe('Get sum from numbers', () => {
      this.data.forEach((item) => {
        test('should return sum from numbers', () => {
          const result = new MathFunctions(this.mathUtilImpl).sum(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
