import express from "express" ;
import { serverConfig } from "./config/index.js";
import { v1Router } from "./Routers/v1/index.router.js";
import { genericErrorHandler } from "./middlewares/error.middleware.js";
import { logger } from "./config/logger.config.js"
import { attachcorrelationIdMiddleware } from "./middlewares/correlation.middleware.js";
import sequelize from "./db/models/sequelize.js";

const app = express() ;  
app.use(express.json() ) ; 
app.use(express.text() ) ;  
app.use( express.urlencoded() ); 

const PORT = serverConfig.PORT ;   // object se took

app.use( attachcorrelationIdMiddleware ) ;  // adding the logger -- correlation id middleware 
app.use( '/api/v1' ,  v1Router ) ; // applicable to every coming request to the server

app.use( genericErrorHandler ) ; // jb koi v error throw yaa fir next pe bhejenge  
// this is the last middleware error handle cutom made by us !!!  
  
app.listen(PORT , async ()=>{
    console.log("Server is listening on port:- " , PORT ) ; 
    logger.info("press Ctrl+C to stop the server " , {"kriti":"bansal"})

    // connecting our server with the database---- 
    // uske liye we need credentials right? to connect -- sequelize object has all of it 
    await sequelize.authenticate() ;  
    logger.info("Connection to the database has been established successfully.") ;  

}) 

    // try {
    //     await sequelize.authenticate() ;
    //     logger.info("Connection to the database has been established successfully.") ;  
        
    //     // const hotel = await Hotel.create({  // to make a hotel 
    //     //     name : "Hotel Kriti" ,
    //     //     address : "123 Sunset Boulevard" ,
    //     //     location : "Hawaaiiiii" ,
    //     //     rating : 4.5 ,
    //     //     rating_count : 1500
    //     // }) ; 
    //     // logger.info("Hotel created successfully: " , hotel.toJSON() ) ;


    //     const hotels = await Hotel.findAll()  //// to fetch the hotels 
    //     logger.info("All Hotels:- " , hotels ) ; 

    //     // READ THE DOCUMENTATION --- Model quering to learn more , RAW queries 

    // }catch(err){
    //     logger.error("Error while connecting to the database " , err ) ;
    // }



