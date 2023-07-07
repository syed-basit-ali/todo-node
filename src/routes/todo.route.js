const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo.controller");

router.get("/", todoController.getItems);
router.get("/:id", todoController.getItemById);
router.post("/", todoController.insertItem);
router.put("/", todoController.updateItem);
router.delete("/:id", todoController.deleteItem);

module.exports = router;

