import { First } from '../util/first.interface';

export class FirstOwn implements First {

    first<T>(array: T[]): T {
        return array[0];
    }

}
