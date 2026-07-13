import { test, expect, vi } from "vitest";
import { getUsers, getProducts } from "../src/api";

vi.mock("../src/api", () => {
    return {
        getUsers: vi.fn(() => [
            { id: 1, name: "Ali" },
            { id: 2, name: "Sara" }
        ]),
         getProducts : vi.fn( () => [
            { id: 1, name: "Laptop" },
            { id: 2, name: "Mouse" }
        ])
    };
});

test("Should return mocked users", () => {

    const users = getUsers();

    expect(users).toHaveLength(2);

    expect(users[0].name).toBe("Ali");

}); 

test("Should return mocked Products", () => {
    const products = getProducts();

    expect(products).toHaveLength(2);
    expect(products[0].name).toBe("Laptop");
    expect(getProducts).toHaveBeenCalledTimes(1);
});