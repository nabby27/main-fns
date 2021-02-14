import { IsAfter } from '../util/isAfter.interface';

export class IsAfterOwn implements IsAfter {

    isAfter(date: Date, dateToCompare: Date): boolean {
        return date.getTime() > dateToCompare.getTime();
    }

}
