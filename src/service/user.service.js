const model = require("../model/user.model");

class service {
  async getItems() {
    const data = await model.find().exec();
    return data;
  }

  async getItemById(payload) {
    const { id } = payload;
    const data = await model.findOne({ _id: id }).exec();
    return data;
  }

  async getItemByEmail(payload) {
    const { email } = payload;
    const data = await model.findOne({ email }).exec();
    return data;
  }

  async insertItem(payload) {
    const request = new model(payload);
    const response = await request.save();
    return response;
  }

  async updateItemById(payload) {
    const { id } = payload;
    const data = await model.findByIdAndUpdate(id, payload, {
      returnOriginal: false,
    });
    return data;
  }

  async deleteItemById(payload) {
    const { id } = payload;
    const data = await model.deleteOne({ _id: id });
    return data.deletedCount;
  }
}

module.exports = new service();
