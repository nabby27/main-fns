import { MedianFunction } from '../../../../app/math/median/util/median.function';
import { Median } from '../../../../app/math/median/util/median.interface';

export class MedianTest {

  data: {
    array: number[];
    expect: number;
  }[] = [
      {
          array: [],
          expect: 0
      },
      {
          array: [3, 1, 2],
          expect: 2
      },
      {
          array: [4, 6, 2, 5],
          expect: 4.5
      }
  ];

  constructor(private medianImpl: Median) {}

  runTest(): void {
      describe('Get median from numbers', () => {
          this.data.forEach((item) => {
              test('should return median from numbers', () => {
                  const result = new MedianFunction(this.medianImpl).median(item.array);

                  expect(result).toEqual(item.expect);
              });
          });
      });
  }

}
