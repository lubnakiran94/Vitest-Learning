import request from "supertest";
import { test, expect, beforeEach} from "vitest";
import app, { resetEmployees } from "../vitest-practice/src/employeeRoutes" ;

beforeEach(() => {
    resetEmployees();
});

test("GET /employees", async ()=>{

    const response = await request(app)
        .get("/employees");

    expect(response.status).toBe(200);

    expect(response.body).toHaveLength(2);

    expect(response.body[0].name).toBe("Ali");

});

test("POST /employees", async ()=>{

    const employee = {

        id:3,

        name:"Ahmed"

    };

    const response = await request(app)

        .post("/employees")

        .send(employee);

    expect(response.status).toBe(201);

    expect(response.body.name).toBe("Ahmed");

});

test("POST without name", async ()=>{

    const response = await request(app)

        .post("/employees")

        .send({

            id:5

        });

    expect(response.status).toBe(400);

    expect(response.body.message)

        .toBe("Name is required");

});


test("PUT /employees/1", async ()=>{


    const response = await request(app)

        .put("/employees/1")

        .send({

            "name":"Aslam"
        });

    expect(response.status).toBe(200);

    expect(response.body.name).toBe("Aslam");

});

test("PUT /employees/100", async ()=>{


    const response = await request(app)

        .put("/employees/100")

        .send({

            "name":"Aslam"
        });

    expect(response.status).toBe(404);

    expect(response.body.message)

        .toBe("Employee not found");

        

});

test("DELETE /employees/1", async ()=>{


    const response = await request(app)

        .delete("/employees/2")


    expect(response.status).toBe(200);

    expect(response.body.name).toBe("Sara");

});

test("DELETE /employees/100", async ()=>{


    const response = await request(app)

        .delete("/employees/100")


    expect(response.status).toBe(404);

    expect(response.body.message)

        .toBe("Employee not found");


        const response2 = await request(app)
        .get("/employees");

    expect(response2.status).toBe(200);

    expect(response2.body).toHaveLength(2);

});
