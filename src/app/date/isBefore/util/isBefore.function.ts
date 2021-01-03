import { IsBefore } from './isBefore.interface';

export class IsBeforeFunction {

  constructor(private isBeforeImpl: IsBefore) { }

  isBefore(date: Date, dateToCompare: Date): boolean {
    return this.isBeforeImpl.isBefore(date, dateToCompare);
  }

}
