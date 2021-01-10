import { LastLetters } from '../util/lastLetters.interface';

export class LastLettersOwn implements LastLetters {

  lastLetters(text: string, numberOfLetters: number): string {
    const textLowerCase = text.toLowerCase();

    return textLowerCase.slice(-numberOfLetters);
  }

}
