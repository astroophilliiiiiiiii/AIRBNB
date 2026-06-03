import { Request , Response , NextFunction } from "express";
import { success } from "zod";
import { z } from "zod";
import { logger } from "../config/logger.config.js";

// function that takes input the schema thats the standard and will validate the req.body incoming 
export const validateRequestBody = ( schema : z.ZodTypeAny )=>{
    return async( req:Request , res:Response , next:NextFunction ) =>{
        try{
            logger.info("Validating Request body " ) ; 
            await schema.parseAsync( req.body ) ; 
            logger.info("Request body is valid !! " ) ; 
            next() ; 
        }catch( error ){
            logger.error("Request body Invalid of /ping request" ) ; 
            res.status( 400 ).json({
                message : "Invalid Request Body" , 
                success : "False " , 
                error : error 
            }) ;
        }
    }
}


