import { MeanFunction } from '../../../../app/math/mean/util/mean.function';
import { Mean } from '../../../../app/math/mean/util/mean.interface';

export class MeanTest {

  data: {
    array: number[];
    expect: number;
  }[] = [
    {
      array: [3, 1, 2],
      expect: 2
    },
    {
      array: [4, 6, 2, 5],
      expect: 4.25
    }
  ];

  constructor(private meanImpl: Mean) {}

  runTest(): void {
    describe('Get mean from array', () => {
      this.data.forEach((item) => {
        test('should return mean from array', () => {
          const result = new MeanFunction(this.meanImpl).mean(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
