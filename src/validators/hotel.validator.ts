import {z} from "zod" ; 

// mene isse validate krvaake chhod diyaa name , address , location pakka hone hi chahiyee 
// and extra kuch v ho sktaa haii -- 
export const hotelSchema = z.object({
    name : z.string().min(1), 
    address : z.string().min(1) ,
    location : z.string().min(1) ,
    // aage ke 2 likhoo yaa naa likhoo koi faraq nahi haii -------------- 
    rating : z.number().optional() ,
    ratingcount : z.number().optional() ,
})


