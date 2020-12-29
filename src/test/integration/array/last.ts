import { ArrayUtil } from '../../../app/array/util/array.util.interface';
import { ArrayFunctions } from '../../../app/array/util/array.function';

export class LastTest {

  data: {
    array: unknown[];
    expect: unknown;
  }[] = [
    {
      array: [3, 2, 1],
      expect: 1
    },
    {
      array: ['a', 'b', 'c'],
      expect: 'c'
    }
  ];

  constructor(private arrayUtilImpl: ArrayUtil) {}

  runTest(): void {
    describe('Get last item from array', () => {
      this.data.forEach((item) => {
        test('should return last item from array', () => {
          const result = new ArrayFunctions(this.arrayUtilImpl).last(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
