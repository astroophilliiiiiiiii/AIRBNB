import {RoomType} from "../db/models/roomCategory.js";

export type createRoomCategoryDTO = {
    hotel_id : number ,
    price : number ,
    room_type : RoomType ,
    room_count : number 
}