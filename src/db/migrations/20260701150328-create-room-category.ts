import { QueryInterface } from "sequelize"

// id	  room_type	  price	  hotel_id	room_count
// 1	  SINGLE	    2000	  1	          10
// 2	  DOUBLE	    3500	  1	          15
// 3	  DELUXE	    6000	  1	          5 

module.exports = {
  async up (queryInterface : QueryInterface ) {
      await queryInterface.sequelize.query(`
            CREATE TABLE IF NOT EXISTS room_categories (
            id INT AUTO_INCREMENT PRIMARY KEY,
            room_type ENUM('SINGLE', 'DOUBLE', 'FAMILY', 'DELUXE', 'SUITE') NOT NULL,
            price INT NOT NULL,
            hotel_id INT,
            room_count INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted_at TIMESTAMP DEFAULT NULL
        );
      `);
  },

  async down (queryInterface : QueryInterface) {
      await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS room_categories;
     `);
  }
};

