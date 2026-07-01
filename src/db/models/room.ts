import {CreationOptional, InferAttributes,InferCreationAttributes, Model,} from 'sequelize';
import sequelize from './sequelize.js';
import Hotel from './hotel.js';
import RoomCategory from './roomCategory.js';

class Room extends Model<
  InferAttributes<Room>,
  InferCreationAttributes<Room>
> {
  declare id: CreationOptional<number>;
  declare room_category_id: number;
  declare hotel_id: number;
  declare room_no: number;
  declare date_of_availability: Date;
  declare booking_id: CreationOptional<number | null>;// in the start .. may or may not be there
  declare createdAt: CreationOptional<Date>; // in the start only assigned 
  declare updatedAt: CreationOptional<Date>; // in the start only assigned 
  declare deleted_at: CreationOptional<Date | null>;// in the start .. may or may not be there
}

Room.init(
  {
    id: {
      type: 'INTEGER',
      autoIncrement: true,
      primaryKey: true,
    },

    room_category_id: {
      type: 'INTEGER',
      allowNull: false,
      references: {
        model: RoomCategory,
        key: 'id',
      },
    },

    hotel_id: {
      type: 'INTEGER',
      allowNull: false,
      references: {
        model: Hotel,
        key: 'id',
      },
    },

    room_no: {
      type: 'INTEGER',
      allowNull: false,
    },

    date_of_availability: {
      type: 'DATE',
      allowNull: false,
    },

    booking_id: {
      type: 'INTEGER',
      defaultValue: null,
    },

    createdAt: {
      type: 'DATE',
      defaultValue: new Date(),
    },

    updatedAt: {
      type: 'DATE',
      defaultValue: new Date(),
    },

    deleted_at: {
      type: 'DATE',
      defaultValue: null,
    },
  },
  {
    tableName: 'rooms',
    sequelize,
    underscored: true,
    timestamps: true,
  }
);

export default Room;