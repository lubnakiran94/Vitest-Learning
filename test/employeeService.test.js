import { describe, test, expect } from "vitest";
import {
    getEmployees,
    getEmployeeById,
    addEmployee,
    deleteEmployee,
    resetEmployees,
    updateEmployee,
    searchEmployee
} from "../src/employeeService";
import { beforeEach } from "vitest";

beforeEach(() => {
    resetEmployees();
});
test("Should return all employees", () => {
 
    const result = getEmployees()
    expect(result).toHaveLength(3);

})
test("Should return employee with id = 2", () => {
 
    const result = getEmployeeById(2)
    expect(result.id).toBe(2);
    expect(result.name).toBe("Sara");
    expect(result.department).toBe("HR");

})

test("Should return undefined for invalid employee id", () => {
    const result = getEmployeeById(100)
    expect(result).toBeUndefined();

})

test("Should create a new employee", () => {
    const newEmployee = {
        id: 5,
        name: "John",
        department: "Finance",
        salary: 85000,
        active: true
    };

    const result = addEmployee(newEmployee);

    expect(result).toHaveLength(4);
    expect(result[3].name).toBe("John");
});

test("Should not add employee with duplicate id", () => {
    const duplicateEmployee = {
        id: 2,
        name: "John",
        department: "Finance",
        salary: 85000,
        active: true
    };

    const result = addEmployee(duplicateEmployee);

    expect(result).toBe(false);
});

test("Employee count should remain unchanged after duplicate id", () => {
    const duplicateEmployee = {
        id: 2,
        name: "John",
        department: "Finance",
        salary: 85000,
        active: true
    };

    addEmployee(duplicateEmployee);

    const employees = getEmployees();

    expect(employees).toHaveLength(3);
});

test("Should delete employee with id 2", () => {
   const result = deleteEmployee(2);

    expect(result).toHaveLength(2);
    expect(getEmployeeById(2)).toBeUndefined();
});

test("Delete an employee that doesn't exist.", () => {
   const result = deleteEmployee(100);

    expect(result).toHaveLength(3);
   // expect(getEmployeeById(2)).toBeUndefined();
});

test("Should update employee salary", () => {
    const updatedEmployee = {
        name: "Ali",
        department: "QA",
        salary: 90000,
        active: true
    };

const result = updateEmployee(1, updatedEmployee);
    expect(result).toHaveLength(3);
    const employee = getEmployeeById(1);
    expect(employee.salary).toBe(90000);
    expect(employee.name).toBe("Ali");
    expect(employee.department).toBe("QA");
   // expect(getEmployeeById(2)).toBeUndefined();
});

test("Should not update any employee salary", () => {
    const updatedEmployee = {
        name: "Ali",
        department: "QA",
        salary: 90000,
        active: true
    };

const result = updateEmployee(100, updatedEmployee);

    expect(result).toBe(false);
   // expect(getEmployeeById(2)).toBeUndefined();
});

test("Should find employee by name", () => {
const result =   searchEmployee("Ali")
expect(result).toHaveLength(1);
expect(result[0].name).toBe("Ali");
});

test("Should find employee by chars", () => {
const result =   searchEmployee("Ah")
expect(result).toHaveLength(1);
expect(result[0].name).toBe("Ahmed");
});

test("Should find employee by name case insensitive", () => {
const result = searchEmployee("ali");
expect(result).toHaveLength(1);
expect(result[0].name).toBe("Ali");
});

test("No search found", () => {
const result =   searchEmployee("John")

  expect(result).toStrictEqual([]);
});

test("Should ignore leading and trailing spaces", () => {
    const result = searchEmployee("   Ali  ");
     expect(result).toHaveLength(1);
      expect(result[0].name).toBe("Ali");

});