import mongoose from "mongoose";
import cors   from "cors";
import express from "express";
import dotenv from "dotenv";
import { CreateEmployee, DeleteEmployee, GetEmployee, UpdateEmployee } from "./controllers/Employee.js";

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());

app.post("/employee",CreateEmployee);
app.put("/employee",UpdateEmployee);
app.delete("/employee",DeleteEmployee);
app.get("/employee",GetEmployee);


mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("database connected !!!");
app.listen(process.env.PORT,()=>{
    console.log("server running at port:"+ process.env.PORT);
    });
})
.catch(()=>{
    console.log("unable to connect database!!!");
})
