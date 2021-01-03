import { CamelCase } from '../util/camelCase.interface';
import * as voca from 'voca';

export class CamelCaseVoca implements CamelCase {

  camelCase(text: string): string {
    const textLowerCase = text.toLowerCase();

    return voca.camelCase(textLowerCase);
  }

}
