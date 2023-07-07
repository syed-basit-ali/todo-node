const todoService = require("../service/todo.service");

class controller {
  async getItems(req, res, next) {
    try {
      const response = await todoService.getItems();
      if (response.length > 0) {
        return res.status(200).json({
          success: true,
          message: "Success",
          data: response,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failure: No data",
        data: null,
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Exception",
        data: error,
      });
    }
  }

  async getItemById(req, res, next) {
    const payload = req.params;
    try {
      const response = await todoService.getItemById(payload);
      if (response) {
        return res.status(200).json({
          success: true,
          message: "Success",
          data: response,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failure: No data",
        data: null,
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Exception",
        data: error,
      });
    }
  }

  async insertItem(req, res, next) {
    const payload = req.body;

    try {
      const response = await todoService.insertItem(payload);
      if (response) {
        return res.status(200).json({
          success: true,
          message: "Success",
          data: response,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failure: No data",
        data: null,
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Exception",
        data: error,
      });
    }
  }

  async updateItem(req, res, next) {
    const payload = req.body;

    try {
      const response = await todoService.updateItemById(payload);
      if (response) {
        return res.status(200).json({
          success: true,
          message: "Success",
          data: response,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failure: No data",
        data: null,
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Exception",
        data: error,
      });
    }
  }

  async deleteItem(req, res, next) {
    const payload = req.params;
    try {
      const response = await todoService.deleteItemById(payload);
      if (response) {
        return res.status(200).json({
          success: true,
          message: "Success",
          data: response,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failure: No data",
        data: null,
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Exception",
        data: error,
      });
    }
  }
}

module.exports = new controller();
