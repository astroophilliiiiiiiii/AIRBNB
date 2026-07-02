// consumes queries from hotel.repository and send response to controller
import { createHotelDTO } from "../dto/hotel.dto.js";
import { HotelRepository } from "../repositories/hotel.repository.js";

const hotelRepository = new HotelRepository() ; // object of hotelRepository class
// on this object we can call all the methods of hotelRepository class

export async function createHotelService( hotelData : createHotelDTO ){ 
    // hotelData ki type h createHotelDto
    const hotel = await hotelRepository.create(hotelData) ;
    return hotel ; 
}

export async function getHotelByIdService( id : number ) {
    const hotel = await hotelRepository.findById(id) ; 
    return hotel ;
}

export async function getAllHotelsService(){
    const hotel = await hotelRepository.findAll() ; 
    return hotel ; 
}

export async function SoftdeleteHotelByIdService( id : number ){
     const hotel = await hotelRepository.softDelete(id) ; 
     return hotel ; 
}

export async function updateHotelByIdService( id:number , hotelData : createHotelDTO ){
     const hotel = await hotelRepository.update(id, hotelData) ; 
     return hotel ; 
}
