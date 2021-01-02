export interface ArrayUtil {
  first<T>(array: T[]): T;
  last<T>(array: T[]): T;
  orderBy<T>(key: string, array: T[]): T[];
  reverse<T>(array: T[]): T[];
}
