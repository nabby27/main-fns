import { EndOfDay } from './endOfDay.interface';

export class EndOfDayFunction {

  constructor(private endOfDayImpl: EndOfDay) { }

  endOfDay(date: Date): Date {
    return this.endOfDayImpl.endOfDay(date);
  }

}
