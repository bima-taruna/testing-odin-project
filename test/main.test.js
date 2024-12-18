const {
  capitalize,
  reverseString,
  calculator,
  caesarCypher,
  analyzeArray,
} = require("../main");

test("capitalize should return string with first character capitalize", () => {
  expect(capitalize("bima")).toBe("Bima");
});

test("reverseString function should return string reversed", () => {
  expect(reverseString("bima")).toBe("amib");
  expect(reverseString("persona")).toBe("anosrep");
});

test("all calculator function should be work as expected", () => {
  const calculatorFun = calculator();
  expect(calculatorFun.add(3, 3)).toBe(6);
  expect(calculatorFun.subtract(6, 3)).toBe(3);
  expect(calculatorFun.divide(6, 3)).toBe(2);
  expect(calculatorFun.multiply(6, 3)).toBe(18);
});

test("caesar cypher function should work as expected", () => {
  expect(caesarCypher("xyz!", 3)).toBe("abc!");
  expect(caesarCypher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCypher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze array function should work as expected", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
