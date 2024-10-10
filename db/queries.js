const pool = require("./pool");

async function getCategories() {
  const query = "SELECT * FROM categories";
  const result = await pool.query(query);
  return result.rows;
}

async function getCategoryById(id) {
  const query = "SELECT * FROM items WHERE id = $1";
  const result = await pool.query(query, [id]);
  return result.rows[0];
}

async function getItemsByCategory(id) {
  const query = "SELECT * FROM items WHERE category_id = $1";
  const result = await pool.query(query, [id]);
  return result.rows;
}
module.exports = { getCategories, getCategoryById, getItemsByCategory };
