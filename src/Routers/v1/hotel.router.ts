import express from "express"
import { createHotelHandler, getHotelsHandler } from "../../controllers/hotel.controller.js";
import { validateRequestBody } from "../../validators/index.js";
import { hotelSchema } from "../../validators/hotel.validator.js";

const HotelRouter = express.Router() ; 
   
HotelRouter.post("/" , validateRequestBody(hotelSchema) ,createHotelHandler ) ; 

HotelRouter.get("/:id" , getHotelsHandler ) ;

export default HotelRouter ; 


