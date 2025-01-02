const { Client } = require("pg");
require("dotenv").config("../.env");

const SQL = `

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY,
  name TEXT,
  message TEXT,
  created_at TIMESTAMP
);

INSERT INTO messages (id, name, message, created_at) VALUES (0, 'Amando', 'Hi there!', CURRENT_TIMESTAMP);
INSERT INTO messages (id, name, message, created_at) VALUES (1, 'Charles', 'Hello World!', CURRENT_TIMESTAMP);

`;

async function populatedb() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

module.exports = { populatedb };
