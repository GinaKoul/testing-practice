import { analyzeArray } from "./analyze-array.js";

test("Function analyzeArray defined", () => {
  expect(analyzeArray).toBeDefined();
});

test("object contains average, min, max and length", () => {
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(object);
});
