import { StartOfDay } from '../util/startOfDay.interface';

export class StartOfDayOwn implements StartOfDay {

    startOfDay(date: Date): Date {
        const result = new Date(date);
        result.setHours(0, 0, 0, 0);

        return result;
    }

}
