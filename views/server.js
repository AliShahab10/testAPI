import mongoose, { connect } from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app=express();
//middleares
app.use(bodyParser.json());
dotenv.config();
const PORT =process.env.POST ||8000;
const mongourl=process.env.mongourl;
mongoose.connect(mongourl).then(()=>{
    console.log("Database Connected Successfully");
    app.listen (PORT,()=>{
        console.log(`Server is running on ${PORT}`);
    });
})
.catch((error)=> console.log("Error Genarate"));