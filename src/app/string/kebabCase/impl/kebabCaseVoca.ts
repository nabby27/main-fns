import { KebabCase } from '../util/kebabCase.interface';
import * as voca from 'voca';

export class KebabCaseVoca implements KebabCase {

  kebabCase(text: string): string {
    const textLowerCase = text.toLowerCase();

    return voca.kebabCase(textLowerCase);
  }

}
