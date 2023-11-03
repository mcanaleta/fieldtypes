import { BaseType, DefaultType } from "../base";

const mapping = {
  true: true,
  True: true,
  TRUE: true,
  false: false,
  False: false,
  FALSE: false,
  yes: true,
  YES: true,
  no: false,
  NO: false,
  No: false,
  y: true,
  Y: true,
  n: false,
  N: false,
  "1": true,
  "0": false,
  s: true,
  S: true,
  si: true,
  Si: true,
  SI: true,
  Sí: true,
} as Record<string, boolean>;

export class BooleanType extends DefaultType<boolean> {
  display(v: boolean) {
    return (v || false).toString();
  }
  parse(v: string) {
    return mapping[v];
  }
  serialize(v: boolean) {
    return v.toString();
  }
}
