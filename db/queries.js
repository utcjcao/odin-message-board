const pool = require("./pool");

// these are database functions

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  console.log(rows);
  return rows;
}

async function getMessage(id) {
  const query = "SELECT * FROM messages WHERE id = $1;";
  const values = [id];
  const { rows } = await pool.query(query, values);
  console.log(rows);
  return rows;
}

async function postMessage(name, message, id) {
  await pool.query(
    "INSERT INTO messages (name, message, id) VALUES ($1, $2, $3);",
    [name, message, id]
  );
}

module.exports = {
  getAllMessages,
  getMessage,
  postMessage,
};
