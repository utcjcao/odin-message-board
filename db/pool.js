const { Pool } = require("pg");
require("dotenv").config("../.env");

const connectionString = process.env.DATABASE_URL;
console.log(connectionString);

module.exports = new Pool({
  connectionString: connectionString,
});
