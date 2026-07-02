import { InferAttributes , InferCreationAttributes, Model , CreationOptional } from "sequelize";
import sequelize from "./sequelize.js";

class Hotel extends Model<InferAttributes<Hotel> , InferCreationAttributes<Hotel>> {
    declare id : CreationOptional<number>;
    declare name : string ; 
    declare address : string ;
    declare location : string ;
    declare createdAt : CreationOptional<Date>;
    declare updatedAt : CreationOptional<Date> ;
    declare rating? : CreationOptional<number>;
    declare ratingcount? : CreationOptional<number>;
    declare deleted_at : CreationOptional<Date | null > ; 
}

Hotel.init({
    id : {
        type : "INT",
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : "VARCHAR(255)",
        allowNull : false
    }, 
    address : {
        type : "VARCHAR(255)",
        allowNull : false
    },
    location : {
        type : "VARCHAR(255)",
        allowNull : false
    },
    createdAt : {
        type : "DATETIME",
        allowNull : false
    },
    updatedAt : {
        type : "DATETIME",
        allowNull : false
    },
    rating : {
        type : "DECIMAL(3,2)",
        allowNull : false,
        defaultValue: 0
    },
    ratingcount : {
        type : "INT",
        allowNull : false,
        defaultValue: 0
    }, 
    deleted_at : {
        type : "DATE" , 
        defaultValue : null 
    }
} , {
    sequelize : sequelize , // database connection vaalaa object vahi valaa -- dekhre ki vahi db hinaa connecting to it 
    tableName : "hotels" , // specific table in that db 
   // underscored : true , // as mere db mein v createdAt , updatedAt hi hai 
   // created_At updated_at nhi hai toh underscored true krne se bhi kuch farak nhi padega
    timestamps : true // wanna create timestamps ?? 
}) ;   

export default Hotel ; // db ka ts represenation exproted ispe functions lgaake CRUD do

