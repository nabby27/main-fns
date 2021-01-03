import { First } from '../../../../app/array/first/util/first.interface';
import { FirstFunction } from '../../../../app/array/first/util/first.function';

export class FirstTest {

  data: {
    array: unknown[];
    expect: unknown;
  }[] = [
    {
      array: [3, 2, 1],
      expect: 3
    },
    {
      array: ['a', 'b', 'c'],
      expect: 'a'
    }
  ];

  constructor(private firstImpl: First) {}

  runTest(): void {
    describe('Get first item from array', () => {
      this.data.forEach((item) => {
        test('should return first item from array', () => {
          const result = new FirstFunction(this.firstImpl).first(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
