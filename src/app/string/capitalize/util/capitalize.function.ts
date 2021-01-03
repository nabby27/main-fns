import { Capitalize } from './capitalize.interface';

export class CapitalizeFunction {

  constructor(private capitalizeImpl: Capitalize) { }

  capitalize(text: string): string {
    return this.capitalizeImpl.capitalize(text);
  }

}
