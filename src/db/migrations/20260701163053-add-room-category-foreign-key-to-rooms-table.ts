import { QueryInterface } from 'sequelize';

//foreignkey in rooms table-- room_category_id( rooms table) ---> id (room_category table)(PK)

// adding a constraint in the rooms table 
// name --> name of the foreign key constaint
//cascading effect applied --> any change in the room_category table will be applied in rooms table 

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.addConstraint('rooms', {
      type: 'foreign key',
      name: 'room_categories_fkey_constraint',
      fields: ['room_category_id'],
      references: {
        table: 'room_categories',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.removeConstraint(
      'rooms',
      'room_categories_fkey_constraint'
    );
  },
};

// rooms -- kis table se constraint remove krna hai 
// room_categories_fkey_constraint -- which constaint to remove 