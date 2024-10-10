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

async function getCategoryById(req, res) {
  const { id } = req.params;
  try {
    const category = await db.getCategoryById(id);
    const items = await db.getItemsByCategory(id);
    res.render("category", { title: `${category.name}`, items });
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).send("Server Error");
  }
}

module.exports = { getCategories, getCategoryById };
