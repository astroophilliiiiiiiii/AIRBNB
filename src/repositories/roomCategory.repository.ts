import RoomCategory from "../db/models/roomCategory.js";
import BaseRepository from "./base.repository.js";

class RoomCategoryRepository extends BaseRepository<RoomCategory>{
    constructor(){
        super(RoomCategory) ; 
    }

    async findAllByHotelId(hotel_id : number){
        const roomCategories = await this.model.findAll({
            where : {
                hotel_id : hotel_id , 
                deleted_at : null , 
            }
        }) ; 
        
        if( !roomCategories || roomCategories.length === 0 ){
            throw new Error(`No room categories found for hotel with id ${hotel_id}`) ; 
        }
        return roomCategories ;
    }



}

export default RoomCategoryRepository ;