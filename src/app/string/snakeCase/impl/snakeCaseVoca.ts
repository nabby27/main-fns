import { SnakeCase } from '../util/snakeCase.interface';
import * as voca from 'voca';

export class SnakeCaseVoca implements SnakeCase {

  snakeCase(text: string): string {
    return voca.snakeCase(text);
  }

}
