import { CloneFunction } from '../../../../app/object/clone/util/clone.function';
import { Clone } from '../../../../app/object/clone/util/clone.interface';

export class CloneTest {

  data: {
    user: {
      name: string,
      alias: string
    },
    links: string[]
  }[] = [
      {
          user: {
              name: 'Iván',
              alias: 'nabby27'
          },
          links: [
              'https://icordoba.es',
              'https://github.com/nabby27'
          ]
      }
  ];

  constructor(private cloneImpl: Clone) {}

  runTest(): void {
      describe('Get clone object', () => {
          this.data.forEach((item) => {
              test('should return clone object', () => {
                  const result = new CloneFunction(this.cloneImpl).execute(item);

                  expect(result).toEqual(item);
                  expect(result).not.toBe(item);
              });
          });
      });
  }

}
