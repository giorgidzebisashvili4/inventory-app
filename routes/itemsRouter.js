const { Router } = require("express");
const itemsRouter = Router();
const itemsController = require("../controllers/itemsController");

itemsRouter.get("/items", itemsController.getItems);
itemsRouter.get("/items/:id", itemsController.getItemById);
itemsRouter.post("/items", itemsController.addItem);
itemsRouter.put("/items/:id", itemsController.updateItem);
itemsRouter.delete("/items/:id", itemsController.deleteItem);

module.exports = itemsRouter;
