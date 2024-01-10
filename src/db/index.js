import mongoose  from "mongoose";

import { DB_NAME } from './../constants.js';
import dotenv from "dotenv";

dotenv.config({
    path:'./env',
})
const myConnect = async()=>{


  
try {

    const dbInstance =  await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);
    
    console.log(`hip hip hurray ${dbInstance.connection.host}`)
} catch (error) {

    console.log(error);
    process.exit(1);
    
}







}



export default myConnect;