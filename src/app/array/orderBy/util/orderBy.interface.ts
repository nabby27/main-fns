export interface OrderBy {
  orderBy<T>(key: string, array: T[]): T[];
}
