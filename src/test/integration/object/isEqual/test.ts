import { IsEqualFunction } from '../../../../app/object/isEqual/util/isEqual.function';
import { IsEqual } from '../../../../app/object/isEqual/util/isEqual.interface';

export class IsEqualTest {

  data: {
    first: { user: { name: string } },
    second: { user: { name: string } },
    expect: boolean
  }[] = [
    {
      first: {
        user: { name: 'Iván' }
      },
      second: {
        user: { name: 'Iván' }
      },
      expect: true
    },
    {
      first: {
        user: { name: 'Iván' }
      },
      second: {
        user: { name: 'Nabby' }
      },
      expect: false
    }
  ];

  constructor(private isEqualImpl: IsEqual) {}

  runTest(): void {
    describe('Get isEqual object', () => {
      this.data.forEach((item) => {
        test('should return isEqual object', () => {
          const result = new IsEqualFunction(this.isEqualImpl).execute(item.first, item.second);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
