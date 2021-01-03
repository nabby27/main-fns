import { UpperCase } from '../util/upperCase.interface';
import * as voca from 'voca';

export class UpperCaseVoca implements UpperCase {

  upperCase(text: string): string {
    return voca.upperCase(text);
  }

}
