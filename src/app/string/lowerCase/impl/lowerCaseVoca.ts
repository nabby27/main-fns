import { LowerCase } from '../util/lowerCase.interface';
import * as voca from 'voca';

export class LowerCaseVoca implements LowerCase {

  lowerCase(text: string): string {
    return voca.lowerCase(text);
  }

}
