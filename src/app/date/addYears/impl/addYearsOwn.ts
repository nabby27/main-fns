import { AddYears } from '../util/addYears.interface';

export class AddYearsOwn implements AddYears {

    addYears(yearsToAdd: number, date: Date): Date {
        const result = new Date(date);
        result.setFullYear(result.getFullYear() + Math.abs(yearsToAdd));

        return result;
    }

}
