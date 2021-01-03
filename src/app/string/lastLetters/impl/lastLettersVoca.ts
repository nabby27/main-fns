import { LastLetters } from '../util/lastLetters.interface';
import * as voca from 'voca';

export class LastLettersVoca implements LastLetters {

  lastLetters(text: string, numberOfLetters: number): string {
    const textLowerCase = text.toLowerCase();

    return voca.last(textLowerCase, numberOfLetters);
  }

}
