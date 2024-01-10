import mongoose from "mongoose";
import  {DB_NAME}  from "./constants.js";
import dotenv from 'dotenv';
import myConnect from "./db/index.js";
import { app } from "./app.js";
// dotenv.config({
//    path: './env'
// })


myConnect().then(()=>{

app.on("error" , (error)=>{
   console.log("THIS IS INDEX.JS ERROR: " ,error);
})

app.listen(process.env.PORT , ()=>{
   console.log(`we are listing our app ${process.env.PORT}`);
})
}).catch((err)=>{
   console.log(err);

})








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