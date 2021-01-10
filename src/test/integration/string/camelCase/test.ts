import { CamelCaseFunction } from '../../../../app/string/camelCase/util/camelCase.function';
import { CamelCase } from '../../../../app/string/camelCase/util/camelCase.interface';

export class CamelCaseTest {

  data: {
    text: string;
    expect: string;
  }[] = [
    {
      text: 'hello world',
      expect: 'helloWorld'
    },
    {
      text: 'bYE',
      expect: 'bye'
    }
  ];

  constructor(private camelCaseImpl: CamelCase) {}

  runTest(): void {
    describe('Get camelCase text', () => {
      this.data.forEach((item) => {
        test('should return camelCase text', () => {
          const result = new CamelCaseFunction(this.camelCaseImpl).execute(item.text);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
