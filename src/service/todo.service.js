const todoModel = require("../model/todo.model");

class service {
  async getItems() {
    const data = await todoModel.find().exec();
    return data;
  }

  async getItemById(payload) {
    const { id } = payload;
    const data = await todoModel.findOne({ _id: id }).exec();
    return data;
  }

  async insertItem(payload) {
    const request = new todoModel(payload);
    const response = await request.save();
    return response;
  }

  async updateItemById(payload) {
    const { id } = payload;
    const data = await todoModel.findByIdAndUpdate(id, payload, {
      returnOriginal: false,
    });
    return data;
  }

  async deleteItemById(payload) {
    const { id } = payload;
    const data = await todoModel.deleteOne({ _id: id });
    return data.deletedCount;
  }
}

module.exports = new service();
