import { reverse } from "./reverse.js";

test("function reverse defined", () => {
  expect(reverse).toBeDefined();
});

test("string reversed", () => {
  const strings = [
    {
      current: "flower",
      expected: "rewolf",
    },
    {
      current: "sun",
      expected: "nus",
    },
    {
      current: "dance",
      expected: "ecnad",
    },
    {
      current: "space",
      expected: "ecaps",
    },
  ];
  strings.forEach((obj) => {
    expect(reverse(obj.current)).toMatch(obj.expected);
  });
});
