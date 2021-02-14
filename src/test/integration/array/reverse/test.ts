import { Reverse } from '../../../../app/array/reverse/util/reverse.interface';
import { ReverseFunction } from '../../../../app/array/reverse/util/reverse.function';

export class ReverseTest {

  data: {
    array: unknown[];
    expect: unknown;
  }[] = [
      {
          array: [3, 2, 1],
          expect: [1, 2, 3]
      },
      {
          array: ['a', 'b', 'c'],
          expect: ['c', 'b', 'a']
      }
  ];

  constructor(private reverseImpl: Reverse) {}

  runTest(): void {
      describe('Get array reversed', () => {
          this.data.forEach((item) => {
              test('should return array reversed', () => {
                  const result = new ReverseFunction(this.reverseImpl).reverse(item.array);

                  expect(result).toEqual(item.expect);
              });
          });
      });
  }

}
