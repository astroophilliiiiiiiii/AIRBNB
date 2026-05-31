import dotenv from "dotenv" ; 
dotenv.config() ; // all the variables in the .env file will be loaded into process.env

type ServerConfig = {
    PORT : number , 
    MONGO_URI : string , 
}

type DBConfig = {
    DB_USER : string , 
    DB_PASSWORD : string ,
    DB_NAME : string , 
    DB_HOST : string , 
}

export const serverConfig : ServerConfig = {
    PORT : Number( process.env.PORT ) || 3000 , 
    MONGO_URI : process.env.MONGO_URI || ""
}

export const dbConfig : DBConfig = {
    DB_USER : process.env.DB_USER || "root" , 
    DB_PASSWORD : process.env.DB_PASSWORD || "root" ,
    DB_NAME : process.env.DB_NAME || "test_db" , 
    DB_HOST : process.env.DB_HOST || "localhost" , 
}
