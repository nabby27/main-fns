import { OrderBy } from '../util/orderBy.interface';

export class OrderByOwn implements OrderBy {

    orderBy<T>(key: string, array: T[]): T[] {
        return array.sort((a: T, b: T) => a[key as keyof T] < b[key as keyof T] ? -1 : 1);
    }

}
