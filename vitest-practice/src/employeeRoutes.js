import express from "express";

const app = express();

app.use(express.json());

const initialEmployees = [
    {
        id:1,
        name:"Ali"
    },
    {
        id:2,
        name:"Sara"
    }
];

let employees = [...initialEmployees];

app.get("/employees",(req,res)=>{
    res.json(employees);
});

app.post("/employees",(req,res)=>{

     if(!req.body.name){

        return res.status(400).json({

            message:"Name is required"

        });

    }

    employees.push(req.body);

    res.status(201).json(req.body);

});


app.put("/employees/:id",(req,res)=>{

   const id = Number(req.params.id);
   
   const empFound  = employees.findIndex(emp =>  emp.id === id);

   if(empFound !== -1){
          employees[empFound] = {
                ...employees[empFound],
                name: req.body.name
            };
           return res.status(200).json(employees[empFound]);
          
      }else{
            return res.status(404).json({
                message: "Employee not found"
            });
      }  
});

app.delete("/employees/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = employees.findIndex(emp => emp.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    const deletedEmployee = employees[index];

    employees.splice(index, 1);

    return res.status(200).json(deletedEmployee);

});

export function resetEmployees() {
    employees.length = 0;
    employees.push(...initialEmployees);
}

export default app;