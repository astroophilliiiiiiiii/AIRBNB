// in which all db interaction is going to happen  -- queries meri ts ki langauge m 
// with the help of hotel object from hotel model 
import { DATE } from "sequelize";
import { logger } from "../config/logger.config.js"; // log ke liye 
import Hotel from "../db/models/hotel.js"; // hotel table -- ts m sql ka hotel table  
import { NotFoundError } from "../utils/errors/app.error.js"; // to throw particular errror
import BaseRepository from "./base.repository.js";

export class HotelRepository extends BaseRepository<Hotel>{
    constructor(){
        super(Hotel) ; 
    }

    // 💡we can override the methods of base repository  ( if we want ) 
    async findAll(){
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

    // 💡we can add new methods specific to hotel repository
    async softDelete( id : number ){
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

}

