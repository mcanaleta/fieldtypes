import { StringDateType } from "./date";

describe("test stringdatetype", function () {
  it("parses", function (done) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    expect(new StringDateType().parse(`2021-05-12`)).toBe("2021-05-12");
    expect(new StringDateType().parse(`05-12`)).toBe(`${currentYear}-05-12`);
    expect(new StringDateType().parse(`12`)).toBe(
      `${currentYear}-${currentMonth}-12`
    );
    expect(new StringDateType().parse(`5/12`)).toBe(`${currentYear}-12-05`);
    done();
  });
});
