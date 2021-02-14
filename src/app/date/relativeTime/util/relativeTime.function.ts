import { Locale } from '../../types/locale';
import { RelativeTime } from './relativeTime.interface';

export class RelativeTimeFunction {

    constructor(private relativeTimeImpl: RelativeTime) { }

    relativeTime(date: Date, locale: Locale): string {
        return this.relativeTimeImpl.relativeTime(date, locale);
    }

}
