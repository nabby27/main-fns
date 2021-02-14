import { OrderBy } from './orderBy.interface';

export class OrderByFunction {

    constructor(private lastImpl: OrderBy) { }

    orderBy<T>(key: string, array: T[]): T[] {
        return this.lastImpl.orderBy(key, array);
    }

}
