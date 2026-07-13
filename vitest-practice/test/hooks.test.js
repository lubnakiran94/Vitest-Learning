import {
    beforeAll,
    beforeEach,
    afterEach,
    afterAll,
    test
} from "vitest";


beforeAll(() => {
    console.log("beforeAll");
});

beforeEach(() => {
    console.log("beforeEach");
});

afterEach(() => {
    console.log("afterEach");
});

afterAll(() => {
    console.log("afterAll");
});
test("Test 1", () => {
    console.log("Running Test 1");
});

test("Test 2", () => {
    console.log("Running Test 2");
});

test("Test 3", () => {
    console.log("Running Test 3");
});