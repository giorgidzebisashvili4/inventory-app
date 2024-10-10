const pool = require("./pool");

async function getCategories() {
  const query = "SELECT * FROM categories";
  const result = await pool.query(query);
  return result.rows;
}

module.exports = { getCategories };
