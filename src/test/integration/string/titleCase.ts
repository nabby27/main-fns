import { StringFunctions } from '../../../app/string/util/string.function';
import { StringUtil } from '../../../app/string/util/string.util.interface';

export class TitleCaseTest {

  data: {
    text: string;
    expect: string;
  }[] = [
    {
      text: 'HELLO world',
      expect: 'Hello World'
    },
    {
      text: 'good bye',
      expect: 'Good Bye'
    }
  ];

  constructor(private stringUtilImpl: StringUtil) {}

  runTest(): void {
    describe('Get titleCase text', () => {
      this.data.forEach((item) => {
        test('should return titleCase text', () => {
          const result = new StringFunctions(this.stringUtilImpl).titleCase(item.text);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
