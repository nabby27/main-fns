import { StringFunctions } from '../../../app/string/util/string.function';
import { StringUtil } from '../../../app/string/util/string.util.interface';

export class KebabCaseTest {

  data: {
    text: string;
    expect: string;
  }[] = [
    {
      text: 'hello world',
      expect: 'hello-world'
    },
    {
      text: 'Good Bye',
      expect: 'good-bye'
    }
  ];

  constructor(private stringUtilImpl: StringUtil) {}

  runTest(): void {
    describe('Get kebabCase text', () => {
      this.data.forEach((item) => {
        test('should return kebabCase text', () => {
          const result = new StringFunctions(this.stringUtilImpl).kebabCase(item.text);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
