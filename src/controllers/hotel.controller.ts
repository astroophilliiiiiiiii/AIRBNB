import { NextFunction, Request , Response } from "express" ;
import { createHotelService, getHotelByIdService , getAllHotelsService , SoftdeleteHotelByIdService , updateHotelByIdService } from "../services/hotel.service.js";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler( req:Request , res:Response , next:NextFunction ){
    // 1. call the service layer function 
    const hotelResponse = await createHotelService( req.body ) ;
    // 2.send the response 
    res.status( StatusCodes.CREATED ).json({
        message : "Hotel created successfully" , 
        data : hotelResponse , 
        success : true 
    })
}

export async function getHotelsHandler( req:Request , res:Response , next:NextFunction ){
    // 1. call the service layer function 
    const hotelsResponse = await getHotelByIdService( Number(req.params.id) ) ;
    // 2.send the response 
    res.status( StatusCodes.OK ).json({
        message : "Hotels fetched successfully" , 
        data : hotelsResponse , 
        success : true 
    })
}

export async function getAllHotelsHandler( req:Request , res:Response , next:NextFunction ){
    // 1.  call the service layer 
    const hotelsResponse = await getAllHotelsService() ;
    //2. send the response 
    res.status( StatusCodes.OK ).json({
        message : "All Hotels fetched successfully" , 
        data : hotelsResponse , 
        success : true 
    })
}

export async function SoftdeleteHotelHandler( req:Request , res:Response , next:NextFunction ){
    // 1.  call the service layer 
    const hotelsResponse = await SoftdeleteHotelByIdService( Number(req.params.id) ) ;
    //2. send the response 
    res.status( StatusCodes.OK ).json({
        message : "Hotel deleted successfully" , 
        data : hotelsResponse , 
        success : true 
    })
}

export async function updateHotelHandler( req:Request , res:Response , next:NextFunction ){
    // 1.  call the service layer 
    const hotelsResponse = await updateHotelByIdService( Number(req.params.id) , req.body ) ;
    //2. send the response 
    res.status( StatusCodes.CREATED ).json({
        message : "Hotel updated successfully" , 
        data : hotelsResponse , 
        success : true 
    })
}
