import { FirstLetters } from '../util/firstLetters.interface';

export class FirstLettersOwn implements FirstLetters {

  firstLetters(text: string, numberOfLetters: number): string {
    const textLowerCase = text.toLowerCase();

    return textLowerCase.substring(0, numberOfLetters);
  }

}
