import axios from "axios";

export async function getUsers(){
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
}

export async function getUsers2() {
    const response = await fetch("/users");

    if (!response.ok) {
        throw new Error("API Error");
    }

    return response.json();
}

export async function getUsersAxios() {
    const response = await axios.get("/users");
    return response.data;
}

export async function getEmployeesAxios() {
    const response = await axios.get("/employees");

    return response.data;
}