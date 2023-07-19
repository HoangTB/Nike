const Order = require('../models/order.model');

const postOrder = async (data, res) => {
  try {
    const existingOrder = await Order.findOne({ where: { user_id: data.user_id } });
    if (!existingOrder) {
      const orderValue = await Order.bulkCreate([data]);
      res.status(200).json({ message: 'Post successfully', orderValue });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to create Order', err });
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await Order.findAll();

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Error Get Product', err });
  }
};

const getOrderById = async (id, res) => {
  try {
    const order = await Order.findAll({
      where: { user_id: id },
    });

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Error Get Product', err });
  }
};

module.exports = { postOrder, getOrder, getOrderById };
