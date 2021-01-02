import { StringFunctions } from '../../../app/string/util/string.function';
import { StringUtil } from '../../../app/string/util/string.util.interface';

export class UpperCaseTest {

  data: {
    text: string;
    expect: string;
  }[] = [
    {
      text: 'HELLO world',
      expect: 'HELLO WORLD'
    },
    {
      text: 'good bye',
      expect: 'GOOD BYE'
    }
  ];

  constructor(private stringUtilImpl: StringUtil) {}

  runTest(): void {
    describe('Get upperCase text', () => {
      this.data.forEach((item) => {
        test('should return upperCase text', () => {
          const result = new StringFunctions(this.stringUtilImpl).upperCase(item.text);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
