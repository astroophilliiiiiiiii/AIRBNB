import express from "express"
import { createHotelHandler, getHotelsHandler , updateHotelHandler , SoftdeleteHotelHandler , getAllHotelsHandler } from "../../controllers/hotel.controller.js";
import { validateRequestBody } from "../../validators/index.js";
import { hotelSchema } from "../../validators/hotel.validator.js";

const HotelRouter = express.Router() ; // creating the router 

// to post some data -- incoming data should follow a particular format ---------- 
// uspe name address location toh honaa hi chaahiyeee --------- 
HotelRouter.post("/" , validateRequestBody(hotelSchema) , createHotelHandler ) ; 

HotelRouter.get("/:id" , getHotelsHandler ) ;

HotelRouter.get("/" , getAllHotelsHandler ) ; 

HotelRouter.delete("/:id" , SoftdeleteHotelHandler ) ; 

HotelRouter.patch("/:id" , updateHotelHandler ) ; 

export default HotelRouter ; 


