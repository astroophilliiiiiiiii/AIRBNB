// consumes queries from hotel.repository and send response to controller
import { createHotelDTO } from "../dto/hotel.dto.js";
import {createHotel} from "../repositories/hotel.repository.js";
import {getHotelById} from "../repositories/hotel.repository.js";

export async function createHotelService( hotelData : createHotelDTO ){ // hotelData ki type h createHotelDto
    const hotel = await createHotel(hotelData) ;
    return hotel ; 
}

export async function getHotelByIdService( id : number ) {
    const hotel = await getHotelById(id) ; 
    return hotel ;
}

