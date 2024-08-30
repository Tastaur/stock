import { Primitive } from '../globalTypes';


export function isPrimitive<T>(value: T | Primitive): value is Primitive {
  return value !== Object(value);
}

export function compareDeepEquality<T>(a: NonNullable<T> | object, b: NonNullable<T> | object): boolean {
  if (isPrimitive(a) && isPrimitive(b)) {
    return a === b;
  }
  return JSON.stringify(a) === JSON.stringify(b);
}