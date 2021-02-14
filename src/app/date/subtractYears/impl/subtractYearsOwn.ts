import { SubtractYears } from '../util/subtractYears.interface';

export class SubtractYearsOwn implements SubtractYears {

    subtractYears(yearsToSubtract: number, date: Date): Date {
        const result = new Date(date);
        result.setFullYear(result.getFullYear() - Math.abs(yearsToSubtract));

        return result;
    }

}
