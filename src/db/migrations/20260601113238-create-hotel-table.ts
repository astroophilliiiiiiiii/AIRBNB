import { QueryInterface } from 'sequelize';

// ye jo cli commands hoti db:migrate vgerraa usne chaltaaa hai ye 
// jiski humne script bnaayi thii -- migrate + rollback krne ke liye------ 
module.exports = {
  async up (queryInterface: QueryInterface) {
     await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS hotels (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);
  },

  async down (queryInterface: QueryInterface) {
     await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS hotels;
    `);
  }
};
