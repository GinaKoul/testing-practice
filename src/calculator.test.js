import { calculator } from "./calculator.js";

test("function calculator defined", () => {
  expect(calculator).toBeDefined();
});

test("add method defined", () => {
  expect(calculator).toHaveProperty("add");
});

test("test addition functionality", () => {
  const additions = [
    {
      num1: 2,
      num2: 2,
      sum: 4,
    },
    {
      num1: 3,
      num2: 5,
      sum: 8,
    },
    {
      num1: 56,
      num2: 74,
      sum: 130,
    },
  ];
  additions.forEach((addition) => {
    expect(calculator.add(addition.num1, addition.num2)).toBe(addition.sum);
  });
});

test("subtract method defined", () => {
  expect(calculator).toHaveProperty("subtract");
});

test("test subtraction functionality", () => {
  const subtractions = [
    {
      num1: 2,
      num2: 2,
      difference: 0,
    },
    {
      num1: 3,
      num2: 5,
      difference: -2,
    },
    {
      num1: 120,
      num2: 30,
      difference: 90,
    },
  ];
  subtractions.forEach((subtraction) => {
    expect(calculator.subtract(subtraction.num1, subtraction.num2)).toBe(
      subtraction.difference
    );
  });
});

test("divide method defined", () => {
  expect(calculator).toHaveProperty("divide");
});

test("test division functionality", () => {
  const divisions = [
    {
      num1: 2,
      num2: 2,
      quotient: 1,
    },
    {
      num1: 17,
      num2: 2,
      quotient: 8.5,
    },
    {
      num1: 50,
      num2: 5,
      quotient: 10,
    },
    {
      num1: 30,
      num2: 80,
      quotient: 0.375,
    },
  ];
  divisions.forEach((division) => {
    expect(calculator.divide(division.num1, division.num2)).toBe(
      division.quotient
    );
  });
});

test("multiply method defined", () => {
  expect(calculator).toHaveProperty("multiply");
});

test("test multiplication functionality", () => {
  const multiplications = [
    {
      num1: 2,
      num2: 2,
      product: 4,
    },
    {
      num1: 17,
      num2: 2,
      product: 34,
    },
    {
      num1: 50,
      num2: 5,
      product: 250,
    },
    {
      num1: 30,
      num2: 80,
      product: 2400,
    },
  ];
  multiplications.forEach((multiplication) => {
    expect(calculator.multiply(multiplication.num1, multiplication.num2)).toBe(
      multiplication.product
    );
  });
});
