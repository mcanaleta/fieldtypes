export interface BaseType<T> {
  // nice display
  display(v: T | null | undefined): string;
  getId(v: T | null | undefined): string;
  // parse from string
  parse(v: string): T | null | undefined;
  // serialize to string
  serialize(v: T | null): string;
  options(): T[] | undefined;
}

export abstract class DefaultType<T> implements BaseType<T> {
  abstract display(v: T): string;
  abstract parse(v: string): T | null | undefined;
  abstract serialize(v: T): string;
  getId(v: T): string {
    return `${v}`;
  }
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
