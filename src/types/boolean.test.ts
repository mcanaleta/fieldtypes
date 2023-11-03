import { BooleanType } from "./boolean";
describe("boolean type", () => {
  it("should parse booleans", () => {
    const type = new BooleanType();
    expect(type.parse("true")).toBe(true);
    expect(type.parse("false")).toBe(false);
    expect(type.parse("yes")).toBe(true);
    expect(type.parse("no")).toBe(false);
    expect(type.parse("y")).toBe(true);
    expect(type.parse("n")).toBe(false);
    expect(type.parse("1")).toBe(true);
    expect(type.parse("0")).toBe(false);
    expect(type.parse("s")).toBe(true);
    expect(type.parse("S")).toBe(true);
    expect(type.parse("si")).toBe(true);
    expect(type.parse("Si")).toBe(true);
    expect(type.parse("SI")).toBe(true);
    expect(type.parse("Sí")).toBe(true);
  });

  it("should serialize booleans", () => {
    const type = new BooleanType();
    expect(type.serialize(true)).toBe("true");
    expect(type.serialize(false)).toBe("false");
  });
});
