const reverseString = require("./reversestring");

test("reverseString function should exist", () => {
  expect(reverseString).toBeDefined();
});

test("String should reverse", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("String should reverse with uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
