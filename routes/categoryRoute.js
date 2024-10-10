const { Router } = require("express");
const categoryController = require("../controllers/categoryController");
const itemsRouter = Router();

itemsRouter.get("/", categoryController.getCategories);
itemsRouter.get("/category/:id", categoryController.getCategoryById);
// itemsRouter.post("/categories", categoryController.addCategory);
// itemsRouter.put("/categories/:id", categoryController.updateCategory);
// itemsRouter.delete("/categories/:id", categoryController.deleteCategory);

module.exports = itemsRouter;
