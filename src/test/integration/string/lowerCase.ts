import { StringFunctions } from '../../../app/string/util/string.function';
import { StringUtil } from '../../../app/string/util/string.util.interface';

export class LowerCaseTest {

  data: {
    text: string;
    expect: string;
  }[] = [
    {
      text: 'HELLO wOrLd',
      expect: 'hello world'
    },
    {
      text: 'Good Bye',
      expect: 'good bye'
    }
  ];

  constructor(private stringUtilImpl: StringUtil) {}

  runTest(): void {
    describe('Get lowerCase text', () => {
      this.data.forEach((item) => {
        test('should return lowerCase text', () => {
          const result = new StringFunctions(this.stringUtilImpl).lowerCase(item.text);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
