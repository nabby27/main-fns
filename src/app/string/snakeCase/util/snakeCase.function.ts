import { SnakeCase } from './snakeCase.interface';

export class SnakeCaseFunction {

  constructor(private snakeCaseImpl: SnakeCase) { }

  execute(text: string): string {
    return this.snakeCaseImpl.snakeCase(text);
  }

}
