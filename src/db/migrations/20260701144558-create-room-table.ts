import { QueryInterface } from "sequelize"

// id -- room-id
// room_category -- Room's category (Deluxe, Standard, Suite, etc.)
// hotel_id -- this room is of which hotel 
// room no --- actual room number ( its mandatory to give room no. )
// 🔴 date of avaialability -- usefull for booking module ( room available on which dates )
// 🔴 booking_id -- if room is booked which id has booked it 

module.exports = {
  async up (queryInterface : QueryInterface ) {
      await queryInterface.sequelize.query(`
        CREATE TABLE IF NOT EXISTS rooms (
          id INT AUTO_INCREMENT PRIMARY KEY,  
          room_category_id INT, 
          hotel_id INT, 
          room_no INT NOT NULL, 
          date_of_availability DATE NOT NULL, 
          booking_id INT, 
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          deleted_at TIMESTAMP DEFAULT NULL
        );
      `);
  },

  async down (queryInterface : QueryInterface) {
      await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS rooms;
     `);
  }
};
