import { MathFunctions } from '../../../app/math/util/math.function';
import { MathUtil } from '../../../app/math/util/math.util.interface';

export class MinTest {

  data: {
    array: number[];
    expect: number;
  }[] = [
    {
      array: [3, 1, 2],
      expect: 1
    },
    {
      array: [4, 6, 2, 5],
      expect: 2
    }
  ];

  constructor(private mathUtilImpl: MathUtil) {}

  runTest(): void {
    describe('Get smallest number from array', () => {
      this.data.forEach((item) => {
        test('should return smallest number from array', () => {
          const result = new MathFunctions(this.mathUtilImpl).min(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
