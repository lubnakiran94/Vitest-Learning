import  { employees, initialEmployees } from "./employees";
export function getEmployees() { return employees; }
export function getEmployeeById(id) {
 return employees.find(emp => emp.id === id)
}
export function addEmployee(employee) {
   const existingEmployee = employees.find(
    emp => emp.id === employee.id
);

   if (existingEmployee) {
    return false;
    }else{
        employees.push(employee)
        return employees;

        }
    
}
export function deleteEmployee(id) {
    const existingEmployee = employees.findIndex(emp => emp.id === id);
     if (existingEmployee !== -1) {
        employees.splice(existingEmployee, 1);
    }

    return employees;

} 

export function updateEmployee(id, updatedEmployee) {
    const empFound  = employees.findIndex(emp =>  emp.id === id);
    if(empFound !== -1){
        employees[empFound] = {
            id: id,
            ...updatedEmployee
        }
        return employees;
    }else{
        return false;
    }

}

export function searchEmployee(name) {

    return employees.filter(emp =>
        emp.name
            .toLowerCase()
            .includes(name.trim().toLowerCase())
    );

}

export function resetEmployees() {
    employees.length = 0;
    employees.push(...initialEmployees);
}