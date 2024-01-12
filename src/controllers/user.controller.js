import { asynFunction } from "../utils/asynHandler.js";


const registerUser = asynFunction(    async( req , res , next )=>{

    res.status(200).json({
        message:"ok"
    })

} )


export default registerUser;