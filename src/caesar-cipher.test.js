import { caesarCipher } from "./caesar-cipher.js";

test("Function caesarCipher defined", () => {
  expect(caesarCipher).toBeDefined();
});

test("Wrapping from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Unchanged punctuation, spaces, and other non-alphabetical characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
