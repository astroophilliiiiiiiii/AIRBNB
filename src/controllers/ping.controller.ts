import { Request , Response } from "express"
import { InternalServerError } from "../utils/errors/app.error.js"
import fs from "fs/promises"

// jo ab fir finallyy /ping ko handle krregaaa 
export const pingHandler = async ( req:Request , res:Response ) =>{

   try{
        await fs.readFile("sample")
        res.status( 200 ).json({message:"Pong"}) ; 
    }catch( error ){
       throw new InternalServerError("/ping api has an error") ; 
    } 
}


