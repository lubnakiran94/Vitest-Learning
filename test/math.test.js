import * as math from "../src/math";
import { test, expect, vi } from "vitest";
import { multiply } from "../src/math";

test("Spy on add()", () => {

    const spy = vi.spyOn(math, "add");

    const result = math.add(10, 5);

    expect(result).toBe(15);

    expect(spy).toHaveBeenCalledTimes(1);

    expect(spy).toHaveBeenCalledWith(10, 5);

});

test("Spy on multiply()", () => {
  const spy = vi.spyOn(math, "multiply");
  const result = math.multiply(4, 6);

  expect(result).toBe(24);

  expect(spy).toHaveBeenCalledTimes(1);

  expect(spy).toHaveBeenCalledWith(4, 6);

  

});