import { Capitalize } from '../util/capitalize.interface';
import * as voca from 'voca';

export class CapitalizeVoca implements Capitalize {

  capitalize(text: string): string {
    const textLowerCase = text.toLowerCase();

    return voca.capitalize(textLowerCase);
  }

}
