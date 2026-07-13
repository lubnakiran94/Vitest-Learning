import { describe, test, expect } from "vitest";
import { users } from "./users";

describe("Users Data", () => {
  test("should have 3 users", () => {
    expect(users).toHaveLength(3);
  });

  test("first user's name is Ali", () => {
    expect(users[0].name).toBe("Ali");
  });

  test("all users have an email", () => {
    users.forEach(user => {
      expect(user.email).toContain("@");
    });
  });

  test("there are 2 active users", () => {
    const activeUsers = users.filter(user => user.active);
    expect(activeUsers).toHaveLength(2);
  });

  test("user with id 2 is inactive", () => {
    const user = users.find(u => u.id === 2);
    expect(user.active).toBe(false);
  });
  
});