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

const connectionString = process.env.DATABASE_URL;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
