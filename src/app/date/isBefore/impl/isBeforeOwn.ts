import { IsBefore } from '../util/isBefore.interface';

export class IsBeforeOwn implements IsBefore {

    isBefore(date: Date, dateToCompare: Date): boolean {
        return date.getTime() < dateToCompare.getTime();
    }

}
