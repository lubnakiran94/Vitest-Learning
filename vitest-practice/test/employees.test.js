import { describe,test,expect } from "vitest"
import { employees } from "../src/employees"

describe("Employee Tests",()=>{

test("Employee count should be 3",()=>{
   expect(employees).toHaveLength(3)
})

test("there are 2 active users", () => {
    const activeUsers = employees.filter(user => user.active);
    expect(activeUsers).toHaveLength(2);
 });

test("employee name Ali", () => {
   expect(employees[0].name).toBe("Ali")
});

test("Ahmed is Inactive", () => {
    const user = employees.find(u => u.id === 3);
    expect(user.active).toBe(false);
});

test("Every employee should have salary", () => {
    
    employees.forEach(emp => {
        expect(emp.salary).toBeGreaterThan(0);
    });

    
});
test("Every employee id should be greater than zero.", () => {
    employees.forEach(emp =>{
        expect(emp.id).toBeGreaterThan(0);
    } )
  });

  test("There should be exactly one employee from HR.", () => {
    const emp = employees.filter(user => user.department == "HR")
      expect(emp).toHaveLength(1)
  });


})