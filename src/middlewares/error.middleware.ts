import { Request , Response , NextFunction } from "express"
import { AppError } from "../utils/errors/app.error.js";

export const genericErrorHandler = async ( err:AppError , req:Request , res:Response , next:NextFunction )=>{
    console.log("abhi mene krke dekhaa ye vo hai -- generic error handler kaa error ")
    console.log( err )
    res.status(err.statuscode ).json({
        success : false , 
        message : err.message  ,
    })
}

