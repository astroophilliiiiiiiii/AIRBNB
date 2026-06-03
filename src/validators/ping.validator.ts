import {z} from "zod" ; 

// incoming object coming from the /ping url should have message that should be zod string .... 
//this schema will is a standard -- will check the incoming req.bodyyy ..  
export const pingSchema = z.object({
    message : z.string()
})

