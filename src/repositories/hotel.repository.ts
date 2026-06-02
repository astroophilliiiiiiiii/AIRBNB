// in which all db interaction is going to happen  -- queries meri ts ki langauge m 
// with the help of hotel object from hotel model 
import { logger } from "../config/logger.config.js";
import hotel from "../db/models/hotel.js";
import Hotel from "../db/models/hotel.js";
import { createHotelDTO } from "../dto/hotel.dto.js";
import { NotFoundError } from "../utils/errors/app.error.js";

// function -- takes hotelData as a parameter and uski type createHotelDTO hai  
export async function createHotel( hotelData : createHotelDTO ){  // hotelData ki type h createHotelDto
    const hotel = await Hotel.create({
        name : hotelData.name ,
        address : hotelData.address ,
        location : hotelData.location ,
        rating : hotelData.rating || 0  , 
        rating_count : hotelData.rating_count || 0 
    }) ; 
    
    logger.info(`Hotel created: ${hotel.id} `)
    return hotel ; 
}

export async function getHotelById( id : number ) {
    const hotel = await Hotel.findByPk(id) ; 

    if( !hotel ){
        logger.error(`Hotel with id ${id} not found `)
        throw new NotFoundError(`Hotel with id ${id} not found `) ;
    }

    logger.info(`Hotel with id ${id} found `) 
    return hotel ;
}
