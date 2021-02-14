import { AddMonths } from './addMonths.interface';

export class AddMonthsFunction {

    constructor(private addMonthsImpl: AddMonths) { }

    addMonths(daysToAdd: number, date: Date): Date {
        return this.addMonthsImpl.addMonths(daysToAdd, date);
    }

}
