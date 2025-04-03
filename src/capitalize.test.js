import { capitalize } from "./capitalize.js";

test("function capitalize defined", () => {
  expect(capitalize).toBeDefined();
});

test("returns string with first character capitalized", () => {
  const strings = [
    {
      current: "flower",
      expected: "Flower",
    },
    {
      current: "sun",
      expected: "Sun",
    },
    {
      current: "dance",
      expected: "Dance",
    },
    {
      current: "space",
      expected: "Space",
    },
  ];
  strings.forEach((obj) => {
    expect(capitalize(obj.current)).toBe(obj.expected);
  });
});
