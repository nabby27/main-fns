import { KebabCaseFunction } from '../../../../app/string/kebabCase/util/kebabCase.function';
import { KebabCase } from '../../../../app/string/kebabCase/util/kebabCase.interface';

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

  constructor(private kebabCaseImpl: KebabCase) {}

  runTest(): void {
      describe('Get kebabCase text', () => {
          this.data.forEach((item) => {
              test('should return kebabCase text', () => {
                  const result = new KebabCaseFunction(this.kebabCaseImpl).execute(item.text);

                  expect(result).toEqual(item.expect);
              });
          });
      });
  }

}
