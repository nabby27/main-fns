import { LastLetters } from './lastLetters.interface';

export class LastLettersFunction {

  constructor(private lastLettersImpl: LastLetters) { }

  lastLetters(text: string, numberOfLetters: number): string {
    return this.lastLettersImpl.lastLetters(text, numberOfLetters);
  }

}
