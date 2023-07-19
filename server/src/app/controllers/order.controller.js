const orderServices = require('../services/order.services');

const postOrder = (req, res) => {
  const data = req.body;
  orderServices.postOrder(data, res);
};
const getOrder = (req, res) => {
  orderServices.getOrder(req, res);
};
const getOrderById = (req, res) => {
  const id = req.params.id;
  orderServices.getOrderById(id, res);
};

module.exports = { postOrder, getOrder, getOrderById };
