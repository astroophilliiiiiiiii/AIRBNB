import express, { Request , Response , NextFunction } from "express"
import pingRouter from "./ping.router.js";
import hotelRouter from "./hotel.router.js";

export const v1Router = express.Router() ;

v1Router.use('/ping' , pingRouter ) ; 

v1Router.use('/hotels' , hotelRouter ) ;


