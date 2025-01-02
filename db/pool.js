const { Pool } = require("pg");
require("dotenv").config("../.env");

// this is just where you have your creditentials and your database to export

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: process.env.PGHOST, // or wherever the db is hosted
  user: process.env.PGUSER,
  database: process.env.POSTGRES_DB,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT, // The default port
});
