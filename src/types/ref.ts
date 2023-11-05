import { DefaultType } from "../base";

function keyBy<T>(arr: T[], key: (v: T) => string) {
  return arr.reduce((acc, v) => {
    acc[key(v)] = v;
    return acc;
  }, {} as Record<string, T>);
}

export class RefType<T> extends DefaultType<string> {
  public dict: Record<string, T> = {};

  constructor(
    public validOptions: T[],
    public displayOption: (v: T) => string,
    public optionId: (v: T) => string
  ) {
    super();
    this.dict = keyBy(validOptions, (o) => optionId(o));
  }

  getId(v: string) {
    return this.optionId(this.dict[v]);
  }

  display(v: string) {
    return this.displayOption(this.dict[v]);
  }
  parse(v: string) {
    return v;
  }
  serialize(v: string) {
    return v;
  }
  options() {
    return Object.keys(this.dict);
  }
}
