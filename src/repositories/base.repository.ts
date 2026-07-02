import { CreationAttributes, Model, ModelStatic, WhereOptions } from "sequelize" 

//  will take Hotel , Room ese classes and inki data entries ki type will be this class 
// like class Student{ ... }   Student s ;    s hai object nd its type is Student ( class )

//                   T ==> object of the class ( JO ki model type ki hogiii )
abstract class BaseRepository<T extends Model>{

    // only this class and inherited classes can change this model.. 
    // ese ni ki koi v bahr se uthaake model se chhed chhad krde 
    protected model : ModelStatic<T> 

    constructor( model : ModelStatic<T> ){
        this.model = model; 
    }
    


    // promise -- as return data entry will come in future -- and its type will be T or NUll ( if not exist )
    async findById( id:number ): Promise<T | null> {
        // isme humne bss bolaa ki id dhundhdoo .. ye koi model specific nhi h 
        // vo primary key vaale col mein jaayegaa id dhundh legaa hai ke nahi 
        const record = await this.model.findByPk(id)

        if( !record ) return null 

        return record ; 
    }

    // array of  objects ( data enteries )
    async findAll(): Promise<T[]>{
        const records = await this.model.findAll({}); 

        if( !records ) return [] ; 

        return records ; // array of objects 
    }

    async delete(whereOptions : WhereOptions<T>): Promise<void> {
        const record = await this.model.destroy({
            where: {
                ...whereOptions // means deleteBYid({id : 1})  -- whereOptions = {id : 1}  -- means delete where id = 1
            }
        })

        if( !record ){
            throw new Error(`Record with ${JSON.stringify(whereOptions)} not found`)
        }

        return ; 
    }

    async create( data : CreationAttributes<T> ): Promise<T>{
        const record = await this.model.create( data ) ; 
        return record ; 
    }

    async update( id:number , data:Partial<T> ): Promise<T | null >{
        const record = await this.model.findByPk(id); 

        if( !record){
            throw new Error(`Record with ${id} not found`)
        }

        Object.assign(record , data)
        await record.save(); 
        return record ; 
    }

}

export default BaseRepository ; 

// nobody should be able to create object of this class directly 
// only inherited classes can create object of this class


