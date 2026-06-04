// in which all db interaction is going to happen  -- queries meri ts ki langauge m 
// with the help of hotel object from hotel model 
import { DATE } from "sequelize";
import { logger } from "../config/logger.config.js"; // log ke liye 
import Hotel from "../db/models/hotel.js"; // hotel table -- ts m sql ka hotel table 
import { createHotelDTO } from "../dto/hotel.dto.js"; // type 
import { NotFoundError } from "../utils/errors/app.error.js"; // to throw particular errror

// function -- takes hotelData as a parameter and uski type createHotelDTO hai  
export async function createHotel( hotelData : createHotelDTO ){  // hotelData ki type h createHotelDto
    const hotel = await Hotel.create({
        name : hotelData.name ,
        address : hotelData.address ,
        location : hotelData.location ,
        rating : hotelData.rating || 0  , 
        ratingcount : hotelData.ratingcount || 0 
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
    return hotel ; // returned to the postman 
}

// the deleted data we dont need to show to the user....
export async function getAllHotels(){
     const hotels = await Hotel.findAll({
         raw: true , 
         where : {
            deleted_at : null , 
         }
      }) ;  // take hotel object clean aaye array 

     if( !hotels ){
        logger.error(`No hotel found`)
        throw new NotFoundError(`Hotels not found!`) ;
    }
     
     logger.info('All Hotels Found !!!' , hotels.length ) ; 
     return hotels ; 
}

// soft deleted the data -------------------------------------------- 
export async function softdeleteHotelByid( id : number ) {
    const hotel = await Hotel.findByPk(id)

    if( !hotel ){
        logger.error(`Hotel with id ${id} not found `)
        throw new NotFoundError(`Hotel with id ${id} not found `) ;
    }
     
     hotel.deleted_at = new Date() // in the hotel model updated !!!!
     await hotel.save() ; // actually updated in the db 
     logger.info(`Hotel with id ${id} soft deleted! `) 
     return hotel ; 
}

export async function updateHotelById( id : number , hotelData : createHotelDTO ){
    const hotel = await Hotel.update(
    { 
        name : hotelData.name , 
        address : hotelData.address ,
        location : hotelData.location ,
        rating : hotelData.rating || 0  , 
        ratingcount : hotelData.ratingcount || 0 
     },
    { where: { id : id ,}, },
 );  
    return hotel ; 
}

