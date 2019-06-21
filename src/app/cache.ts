import { Observable } from 'rxjs';

export function cache(uncache?: string) {
  return (
    target: any,
    name: PropertyKey,
    descriptor: PropertyDescriptor
  ) => {
    const getter = descriptor.get;

    if (!getter) {
      throw new TypeError('Getter property descriptor expected');
    }

    let value: any;
    let subscribed = false;
    descriptor.get = function(this: any) {
      if (!subscribed && uncache) {
        const observable = this[uncache] as Observable<any>;

        observable.subscribe(() => {
          value = undefined;
        });
        subscribed = true;
      }

      if (value === undefined) {
        value = getter.call(this);
      }


      return value;
    };
  };
}
