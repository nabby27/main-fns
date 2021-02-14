import { SnakeCaseFunction } from '../../../../app/string/snakeCase/util/snakeCase.function';
import { SnakeCase } from '../../../../app/string/snakeCase/util/snakeCase.interface';

export class SnakeCaseTest {

  data: {
    text: string;
    expect: string;
  }[] = [
      {
          text: 'HELLO world',
          expect: 'hello_world'
      },
      {
          text: 'Good Bye',
          expect: 'good_bye'
      }
  ];

  constructor(private snakeCaseImpl: SnakeCase) {}

  runTest(): void {
      describe('Get snakeCase text', () => {
          this.data.forEach((item) => {
              test('should return snakeCase text', () => {
                  const result = new SnakeCaseFunction(this.snakeCaseImpl).execute(item.text);

                  expect(result).toEqual(item.expect);
              });
          });
      });
  }

}
