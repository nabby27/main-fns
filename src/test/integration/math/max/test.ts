import { MaxFunction } from '../../../../app/math/max/util/max.function';
import { Max } from '../../../../app/math/max/util/max.interface';

export class MaxTest {

  data: {
    array: number[];
    expect: number;
  }[] = [
    {
      array: [3, 1, 2],
      expect: 3
    },
    {
      array: [4, 6, 2, 5],
      expect: 6
    }
  ];

  constructor(private maxImpl: Max) {}

  runTest(): void {
    describe('Get biggest number from array', () => {
      this.data.forEach((item) => {
        test('should return biggest number from array', () => {
          const result = new MaxFunction(this.maxImpl).max(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
