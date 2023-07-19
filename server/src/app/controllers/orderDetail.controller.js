const orderDetailServices = require('../services/orderDetail.services');

const getOrderDetailById = (req, res) => {
  const id = req.params.id;
  orderDetailServices.getOrderDetailById(id, res);
};
const postOrderDetail = (req, res) => {
  const data = req.body;
  orderDetailServices.postOrderDetail(data, res);
};
const updateOrderDetailById = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  orderDetailServices.updateOrderDetailById(id, data, res);
};

const updateOrderDetailQuantity = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  orderDetailServices.updateOrderDetailQuantity(id, data, res);
};

const deleteOrderDetail = (req, res) => {
  const id = req.params.id;
  orderDetailServices.deleteOrderDetail(id, res);
};

const deleteOrderDetailByHistory = (req, res) => {
  const id = req.params.id;
  orderDetailServices.deleteOrderDetailByHistory(id, res);
};

module.exports = {
  getOrderDetailById,
  postOrderDetail,
  updateOrderDetailById,
  deleteOrderDetail,
  updateOrderDetailQuantity,
  deleteOrderDetailByHistory,
};
