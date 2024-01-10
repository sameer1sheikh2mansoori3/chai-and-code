import mongoose from "mongoose";
import  {DB_NAME}  from "./constants.js";
import dotenv from 'dotenv';
import myConnect from "./db/index.js";
dotenv.config({
   path: './env'
})


myConnect();








/*import express from "express";
const app = express();
// const DB_NAME = "videotube";
;(async()=>{


try {
    
   await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`)
   
 app.on("error" , ()=>{
    console.log("we have this error" , error)
 })
   app.listen(4500 , ()=>{
    console.log(`we have connected`);
   })

} catch (error) {
    console.error(error);
}
})()
*/