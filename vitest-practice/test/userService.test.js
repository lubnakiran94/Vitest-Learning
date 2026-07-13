import { test, expect, vi } from "vitest";
import { getUsers, getUsers2, getUsersAxios,getEmployeesAxios } from "../src/userService";
import axios from "axios";
vi.mock("axios");
test("should fetch users", async () => {
    global.fetch = vi.fn();

    global.fetch.mockedResolvedValue({
        ok: true,
        json: async () => [
             { id: 1, name: "Ali" },
            { id: 2, name: "Sara" }
        ]
    });

    const users =  await getUsers();
    expect(users).toHaveLength(2);

    expect(users[0].name).toBe("Ali");

    expect(fetch).toHaveBeenCalledTimes(1);

})

test("should fetch users", async () => {
    global.fetch = vi.fn();

    global.fetch.mockRejectedValue(
    new Error("Network Error")
   );
    const users =  await expect(getUsers())
    .rejects
    .toThrow("Network Error");

   

    expect(fetch).toHaveBeenCalledTimes(1);

})

test("Should throw API Error for 404 response", async () => {

    global.fetch = vi.fn();

    global.fetch.mockResolvedValue({
        ok: false,
        status: 404,
        json: async () => ({
            message: "Not Found"
        })
    });

    await expect(getUsers2())
        .rejects
        .toThrow("API Error");

    expect(fetch).toHaveBeenCalledTimes(1);

});

test("Should fetch users", async () => {

    axios.get.mockResolvedValue({
        data: [
            { id: 1, name: "Ali" },
            { id: 2, name: "Sara" }
        ]
    });

    const users = await getUsersAxios();

    expect(users).toHaveLength(2);

    expect(users[0].name).toBe("Ali");

    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(axios.get).toHaveBeenCalledWith("/users");

});

test("Should fetch employees", async () => {

    axios.get.mockResolvedValue({
        data: [
            { id: 1, name: "Ali" },
            { id: 2, name: "Sara" }
        ]
    });

    const users = await getEmployeesAxios();

    expect(users).toHaveLength(2);

    expect(users[0].name).toBe("Ali");

    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(axios.get).toHaveBeenCalledWith("/employees");

});

test("should fetch users", async () => {
   axios.get.mockRejectedValue(
    new Error("Server Error")
);

await expect(getEmployeesAxios())
    .rejects
    .toThrow("Server Error");
    expect(fetch).toHaveBeenCalledTimes(1);

})