import { MathFunctions } from '../../../app/math/util/math.function';
import { MathUtil } from '../../../app/math/util/math.util.interface';

export class ModeTest {

  data: {
    array: number[];
    expect: number[];
  }[] = [
    {
      array: [3, 1, 1],
      expect: [1]
    },
    {
      array: [4, 2, 2, 5],
      expect: [2]
    },
    {
      array: [4, 2, 2, 5, 4, 3, 3],
      expect: [2, 3, 4]
    }
  ];

  constructor(private mathUtilImpl: MathUtil) {}

  runTest(): void {
    describe('Get mode from array', () => {
      this.data.forEach((item) => {
        test('should return mode from array', () => {
          const result = new MathFunctions(this.mathUtilImpl).mode(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
