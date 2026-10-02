import { test, expect } from "@jest/globals";
import { isEven, palindrome, countVowels } from "../src/functions";

test("isEven returns true for an even number", () => {
  expect(isEven(10)).toBe(true);
});

test("isEven returns false for an odd number", () => {
  expect(isEven(11)).toBe(false);
});

test("palindrome returns true for a palindrome", () => {
  expect(palindrome("tacocat")).toBe(true);
});

test("palindrome returns false for a non-palindrome", () => {
  expect(palindrome("cat")).toBe(false);
});

test("countVowels counts vowels in a string", () => {
  // Step 6: changed the correct expectation from 3 to 300 to break this test.
  expect(countVowels("hello world")).toBe(300);
});

test("countVowels returns zero when there are no vowels", () => {
  expect(countVowels("myths")).toBe(0);
});
