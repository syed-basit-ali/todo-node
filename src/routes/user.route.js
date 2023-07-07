const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/", userController.getItems);
router.get("/:id", userController.getItemById);
router.post("/", userController.insertItem);
router.put("/", userController.updateItem);
router.delete("/:id", userController.deleteItem);

module.exports = router;
