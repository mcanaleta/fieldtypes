export interface BaseType<T> {
  // nice display
  display(v: T): string;
  // parse from string
  parse(v: string): T | undefined;
  // serialize to string
  serialize(v: T): string;
  options(): T[] | undefined;
}

export abstract class DefaultType<T> implements BaseType<T> {
  abstract display(v: T): string;
  abstract parse(v: string): T | undefined;
  abstract serialize(v: T): string;
  getChildClazz(): any {
    return null;
  }
  preProcess(v: any) {
    return v;
  }
  options(): T[] | undefined {
    return undefined;
  }
}
