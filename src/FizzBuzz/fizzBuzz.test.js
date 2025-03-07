import { expect, test } from "vitest";
import { fizzBuzz } from "./fizzBuzz";

test.each([
    [1, "1"],
    [2, "2"],
    [3, "fizz"],
    [5, "buzz"],
    [6, "fizz"],
    [10, "buzz"],
    [15, "fizzbuzz"],
    [90, "fizzbuzz"],
])("given %s returns %s", (input, expected) => {
    expect(fizzBuzz(input)).toEqual(expected);
});
