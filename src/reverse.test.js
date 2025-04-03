import { reverseString } from "./reverse.js";

test("function reverseString defined", () => {
  expect(reverseString).toBeDefined();
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
    expect(reverseString(obj.current)).toMatch(obj.expected);
  });
});
