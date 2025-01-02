const { Client } = require("pg");
require("dotenv").config("../.env");

const SQL = `

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY,
  name TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (id, name, message) VALUES (0, 'Amando', 'Hi there!');
INSERT INTO messages (id, name, message) VALUES (1, 'Charles', 'Hello World!');

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
