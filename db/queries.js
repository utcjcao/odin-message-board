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
  const created_at = new Date();
  await pool.query(
    "INSERT INTO messages (name, message, created_at, id) VALUES ($1, $2, $3, $4);",
    [name, message, created_at, id]
  );
}

module.exports = {
  getAllMessages,
  getMessage,
  postMessage,
};
