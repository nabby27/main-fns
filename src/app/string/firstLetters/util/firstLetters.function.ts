import { FirstLetters } from './firstLetters.interface';

export class FirstLettersFunction {

  constructor(private firstLettersImpl: FirstLetters) { }

  execute(text: string, numberOfLetters: number): string {
    return this.firstLettersImpl.firstLetters(text, numberOfLetters);
  }

}
