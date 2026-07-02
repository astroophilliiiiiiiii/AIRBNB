import RoomCategoryRepository from "../repositories/roomCategory.repository.js";
import { createRoomCategoryDTO } from "../dto/roomCategory.dto.js";
import { HotelRepository } from "../repositories/hotel.repository.js";
import { NotFoundError } from "../utils/errors/app.error.js";

const hotelRepository = new HotelRepository() ;
export const roomCategoryRepository = new RoomCategoryRepository() ; // object of roomCategoryRepository class

export async function createRoomCategoryService( roomCategoryData : createRoomCategoryDTO ){
    const roomCategory = await roomCategoryRepository.create(roomCategoryData) ;
    return roomCategory ; 
}


export async function getRoomCategoryByIdService( id : number ) {
    const roomCategory = await roomCategoryRepository.findById(id) ; 
    return roomCategory ;
}


export async function getAllRoomCategoriesByHotelIdService( hotel_id : number ){
    // check if the hotel exists or not
    const hotel = await hotelRepository.findById(hotel_id) ; 
    if(!hotel){
        throw new Error(`Hotel with id ${hotel_id} does not exist`) ;
    }
    
    // find all roomCategories by hotel_id
    const roomCategories = await roomCategoryRepository.findAllByHotelId(hotel_id) ;
    return roomCategories ; 
}


export async function deleteRoomCategoryByIdService( id : number ){
    // see if this id se roomCategory exists or not
    const roomCategory = await roomCategoryRepository.findById(id) ; 

    if(!roomCategory){
        throw new NotFoundError(`Room category with id ${id} does not exist`) ;
    }

    await roomCategoryRepository.delete({ id : id }) ;
    return { message : `Room category with id ${id} has been deleted successfully` } ; 
}

