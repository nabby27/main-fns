import { UpperCaseFunction } from '../../../../app/string/upperCase/util/upperCase.function';
import { UpperCase } from '../../../../app/string/upperCase/util/upperCase.interface';

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

  constructor(private upperCaseImpl: UpperCase) {}

  runTest(): void {
      describe('Get upperCase text', () => {
          this.data.forEach((item) => {
              test('should return upperCase text', () => {
                  const result = new UpperCaseFunction(this.upperCaseImpl).execute(item.text);

                  expect(result).toEqual(item.expect);
              });
          });
      });
  }

}
