import { test, expect, vi } from "vitest";


test("Test 1", () => {
    const login = vi.fn();
    login("Ali");
   /// expect(login).toHaveBeenCalledTimes(3);
   expect(login).toHaveBeenCalledWith("Ali");

});

test("Test 2", () => {
    const login = vi.fn();

    login.mockImplementation(() => {
    return ("Login Successful");
    });
    
    login();
   /// expect(login).toHaveBeenCalledTimes(3);
   expect(login()).toBe("Login Successful");

});

test("Test 3", () => {
    const login = vi.fn();
    
    login
    .mockReturnValueOnce("Admin")
    .mockReturnValueOnce("User")
    .mockReturnValue("Guest");
   
   expect(login()).toBe("Admin");
    expect(login()).toBe("User");
    expect(login()).toBe("Guest");
    expect(login()).toBe("Guest");

});