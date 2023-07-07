const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoModel = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
});

module.exports = mongoose.model("todo", todoModel);
