import { Last } from '../util/last.interface';

export class LastOwn implements Last {

    last<T>(array: T[]): T {
        return array[array.length - 1];
    }

}
