import { InferAttributes , InferCreationAttributes, Model , CreationOptional } from "sequelize";
import sequelize from "./sequelize.js";

class Hotel extends Model<InferAttributes<Hotel> , InferCreationAttributes<Hotel>> {
    declare id : CreationOptional<number>;
    declare name : string ; 
    declare address : string ;
    declare location : string ;
    declare createdAt : CreationOptional<Date>;
    declare updatedAt : CreationOptional<Date>
    declare rating : number;
    declare rating_count : number ;
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
        allowNull : false
    },
    rating_count : {
        type : "INT",
        allowNull : false
    }
} , {
    sequelize : sequelize ,
    tableName : "hotels" , 
   // underscored : true , // as mere db mein v createdAt , updatedAt hi hai 
   // created_At updated_at nhi hai toh underscored true krne se bhi kuch farak nhi padega
    timestamps : true
}) ;   

export default Hotel ; // db ka ts represenation exproted ispe functions lgaake CRUD do

