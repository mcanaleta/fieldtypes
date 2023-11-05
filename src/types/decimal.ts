import { BaseType, DefaultType } from "../base";

export class DecimalType extends DefaultType<number> {
  display(v: number) {
    // display with thousand separator
    if (v === undefined || v === null) {
      return "";
    }
    return v.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  serialize(v: number) {
    if (v === undefined || v === null) {
      return "";
    }
    return v.toString();
  }
  parse(v: string) {
    if (v == "") {
      return null;
    }
    return parseFloat(v);
  }
}
