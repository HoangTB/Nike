const historyServices = require('../services/history.services');

const postHistory = async (req, res) => {
  const data = req.body;
  historyServices.postHistory(data, res);
};
const getAllHistoryByIdOrder = async (req, res) => {
  historyServices.getAllHistoryByIdOrder(req, res);
};

const getHistoryByIdOrder = async (req, res) => {
  const id = req.params.id;
  historyServices.getHistoryByIdOrder(id, res);
};

const getHistoryWithMonth = async (req, res) => {
  historyServices.getHistoryWithMonth(req, res);
};

const updateHistoryStatus = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  historyServices.updateHistoryStatus(id, data, res);
};
module.exports = { postHistory, getHistoryByIdOrder, getAllHistoryByIdOrder, updateHistoryStatus, getHistoryWithMonth };
