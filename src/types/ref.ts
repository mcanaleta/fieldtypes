import { DefaultType } from "../base";

export class RefType<T> extends DefaultType<string> {
  public dict: Record<string, T> = {};

  constructor(
    public validOptions: Record<string, T>,
    public displayOption: (v: T) => string
  ) {
    super();
    this.dict = validOptions;
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
