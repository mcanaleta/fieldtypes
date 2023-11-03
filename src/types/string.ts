import { BaseType, DefaultType } from "../base";

export class StringType extends DefaultType<string> {
  display(v: string) {
    return v || "";
  }
  parse(v: string) {
    return v;
  }
  serialize(v: string) {
    return v;
  }
}
