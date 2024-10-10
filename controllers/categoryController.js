const db = require("../db/queries");

async function getCategories(req, res) {
  try {
    const categories = await db.getCategories();
    res.render("index", { title: "Categories", categories });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Server Error");
  }
}

module.exports = { getCategories };
