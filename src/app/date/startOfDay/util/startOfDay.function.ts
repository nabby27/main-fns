import { StartOfDay } from './startOfDay.interface';

export class StartOfDayFunction {

  constructor(private endOfDayImpl: StartOfDay) { }

  startOfDay(date: Date): Date {
    return this.endOfDayImpl.startOfDay(date);
  }

}
