const { Router } = require("express");
const itemsRouter = Router();
const categoryController = require("../controllers/categoryController");

itemsRouter.get("/categories", categoryController.getCategories);
itemsRouter.get("/categories/:id", categoryController.getCategoryById);
itemsRouter.post("/categories", categoryController.addCategory);
itemsRouter.put("/categories/:id", categoryController.updateCategory);
itemsRouter.delete("/categories/:id", categoryController.deleteCategory);

module.exports = itemsRouter;
