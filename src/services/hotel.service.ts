// consumes queries from hotel.repository and send response to controller
import { createHotelDTO } from "../dto/hotel.dto.js";
import {createHotel , getHotelById, deleteHotelByid , getAllHotels, updateHotelById } from "../repositories/hotel.repository.js";


export async function createHotelService( hotelData : createHotelDTO ){ 
    // hotelData ki type h createHotelDto
    const hotel = await createHotel(hotelData) ;
    return hotel ; 
}

export async function getHotelByIdService( id : number ) {
    const hotel = await getHotelById(id) ; 
    return hotel ;
}

export async function getAllHotelsService(){
    const hotel = await getAllHotels() ; 
    return hotel ; 
}

export async function deleteHotelByIdService( id : number ){
     const hotel = await deleteHotelByid( id ) ; 
     return hotel ; 
}

export async function updateHotelByIdService( id:number , hotelData : createHotelDTO ){
     const hotel = await updateHotelById( id , hotelData ) ; 
     return hotel ; 
}
