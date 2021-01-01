import { MathFunctions } from '../../../app/math/util/math.function';
import { MathUtil } from '../../../app/math/util/math.util.interface';

export class MultiplyTest {

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
      expect: 240
    }
  ];

  constructor(private mathUtilImpl: MathUtil) {}

  runTest(): void {
    describe('Get product from numbers', () => {
      this.data.forEach((item) => {
        test('should return product from numbers', () => {
          const result = new MathFunctions(this.mathUtilImpl).multiply(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
