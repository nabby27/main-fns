import { PascalCaseFunction } from '../../../../app/string/pascalCase/util/pascalCase.function';
import { PascalCase } from '../../../../app/string/pascalCase/util/pascalCase.interface';

export class PascalCaseTest {

  data: {
    text: string;
    expect: string;
  }[] = [
      {
          text: 'HELLO world',
          expect: 'HelloWorld'
      },
      {
          text: 'good bye',
          expect: 'GoodBye'
      }
  ];

  constructor(private pascalCaseImpl: PascalCase) {}

  runTest(): void {
      describe('Get pascalCase text', () => {
          this.data.forEach((item) => {
              test('should return pascalCase text', () => {
                  const result = new PascalCaseFunction(this.pascalCaseImpl).execute(item.text);

                  expect(result).toEqual(item.expect);
              });
          });
      });
  }

}
