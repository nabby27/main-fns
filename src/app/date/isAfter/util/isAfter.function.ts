import { IsAfter } from './isAfter.interface';

export class IsAfterFunction {

    constructor(private isAfterImpl: IsAfter) { }

    isAfter(date: Date, dateToCompare: Date): boolean {
        return this.isAfterImpl.isAfter(date, dateToCompare);
    }

}
