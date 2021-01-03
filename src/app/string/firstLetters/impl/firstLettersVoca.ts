import { FirstLetters } from '../util/firstLetters.interface';
import * as voca from 'voca';

export class FirstLettersVoca implements FirstLetters {

  firstLetters(text: string, numberOfLetters: number): string {
    const textLowerCase = text.toLowerCase();

    return voca.first(textLowerCase, numberOfLetters);
  }

}
