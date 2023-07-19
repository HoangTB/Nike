const OrderDetail = require('../models/orderDetail.model');

const getOrderDetailById = async (id, res) => {
  try {
    const orderDetail = await OrderDetail.findAll({
      where: { order_id: id },
    });

    res.status(200).json(orderDetail);
  } catch (err) {
    res.status(500).json({ message: 'Error Get OrderDetail', err });
  }
};

const postOrderDetail = async (data, res) => {
  try {
    const orderDetailValue = await OrderDetail.bulkCreate([data]);
    res.status(200).json({ message: 'Post successfully', orderDetailValue });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create OrderDetail ', err });
  }
};

const updateOrderDetailQuantity = async (id, data, res) => {
  try {
    const productCheckId = await OrderDetail.update(data, { where: { product_id: Number(id) } });

    res.status(200).json({ message: 'Update quantity successfully completed', productCheckId });
  } catch (err) {
    res.status(500).json({ message: 'Error Update quantity' });
  }
};

const updateOrderDetailById = async (id, data, res) => {
  try {
    const orderDetailUpdate = await OrderDetail.update(data, {
      where: {
        product_id: Number(id),
      },
    });
    res.status(200).json({ message: 'Update successfully !', orderDetailUpdate });
  } catch (err) {
    res.status(500).json({ message: 'Error Update OrderDetail', err });
  }
};

const deleteOrderDetail = async (id, res) => {
  try {
    const orderDetail = await OrderDetail.destroy({
      where: {
        product_id: id,
      },
    });
    res.status(200).json({ message: 'Delete successfully', orderDetail });
  } catch (err) {
    res.status(500).json({ message: 'Error Delete OrderDetail', err });
  }
};

const deleteOrderDetailByHistory = async (id, res) => {
  try {
    const orderDetail = await OrderDetail.destroy({
      where: {
        order_id: id,
      },
    });
    res.status(200).json({ message: 'Delete successfully', orderDetail });
  } catch (err) {
    res.status(500).json({ message: 'Error Delete OrderDetail', err });
  }
};

module.exports = {
  getOrderDetailById,
  postOrderDetail,
  updateOrderDetailById,
  updateOrderDetailQuantity,
  deleteOrderDetail,
  deleteOrderDetailByHistory,
};
