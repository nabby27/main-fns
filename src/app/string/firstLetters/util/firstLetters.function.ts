import { FirstLetters } from './firstLetters.interface';

export class FirstLettersFunction {

  constructor(private firstLettersImpl: FirstLetters) { }

  firstLetters(text: string, numberOfLetters: number): string {
    return this.firstLettersImpl.firstLetters(text, numberOfLetters);
  }

}
