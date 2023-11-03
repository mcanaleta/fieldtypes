import { BaseType, DefaultType } from "../base";

function makeDateString(year: number, month: number, day: number) {
  return `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
}
export class StringDateType extends DefaultType<string> {
  display(v: string) {
    return v;
  }
  parse(v: string) {
    if (v.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return v;
    }
    if (v.match(/^\d{1,2}-\d{1,2}/)) {
      const [month, day] = v.split("-").map((v) => parseInt(v, 10));
      return makeDateString(new Date().getFullYear(), month, day);
    } else if (v.match(/^\d{1,2}\/\d{1,2}/)) {
      const [day, month] = v.split("/").map((v) => parseInt(v, 10));
      return makeDateString(new Date().getFullYear(), month, day);
    } else if (v.match(/^\d{1,2}$/)) {
      const day = parseInt(v, 10);
      return makeDateString(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        day
      );
    }
    return undefined;
  }
  serialize(v: string) {
    return v;
  }
}
