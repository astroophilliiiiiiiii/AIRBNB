import {dbConfig} from '../../config/index.js';
import { Sequelize } from 'sequelize';

// object that has all the credentials to connect to the database -------------------------
// used wherever we wanna setup the connection with the database ----- 
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: dbConfig.DB_HOST,
  username: dbConfig.DB_USER,
  password: dbConfig.DB_PASSWORD,
  database: dbConfig.DB_NAME,
  logging : true , // Enable logging for debugging purposes
});

export default sequelize;
