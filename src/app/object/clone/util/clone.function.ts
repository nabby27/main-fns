import { Clone } from './clone.interface';

export class CloneFunction {

  constructor(private cloneImpl: Clone) { }

  execute<T>(object: T): T {
    return this.cloneImpl.clone(object);
  }

}
