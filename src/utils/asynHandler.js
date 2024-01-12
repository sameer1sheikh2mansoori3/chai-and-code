export const asynFunction = (fn)=> async( req , res , next )=>{ 

    

    try {
        
              await fn( req , res , next )

    } catch (error) {


        res.status(error.status || 500).json({
        success : true,
        message : `we are having some kind of error ${error.message}`
        })
        
    }

 }
