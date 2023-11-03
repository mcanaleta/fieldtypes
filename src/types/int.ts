import { BaseType, DefaultType } from "../base";

export class IntType extends DefaultType<number> {
  display(v: number) {
    return v?.toString();
  }
  parse(v: string) {
    return parseInt(v);
  }
  serialize(v: number) {
    return v.toString();
  }
}
