import mysql from "mysql2";
import dotenv from "dotenv";
// dotenv.config({ path: "../.env" });
dotenv.config();

// create the connection to database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default db;
