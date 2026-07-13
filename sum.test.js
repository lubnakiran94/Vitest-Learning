// import { describe, test, expect } from "vitest";
// import { sum } from "./sum";

// describe("Sum Function", () => {

//     test("adds two positive numbers", () => {
//         expect(sum(2,3)).toBe(5);
//     });

// });

import { describe, test, expect } from "vitest";
import { multiply, divide, subtract } from "./calculator";

describe("Calculator",()=>{

    test("Multiply",()=>{
        expect(multiply(5,4)).toBe(20)
    })

    test("Divide",()=>{
        expect(divide(20,5)).toBe(4)
    })

    test("Subtract",()=>{
        expect(subtract(10,4)).toBe(6)
    })

})