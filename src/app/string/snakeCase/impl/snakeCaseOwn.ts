import { SnakeCase } from '../util/snakeCase.interface';

export class SnakeCaseOwn implements SnakeCase {

  snakeCase(text: string): string {
    return text.toLowerCase().replace(/\s/g, '_');
  }

}
