const History = require('../models/history.model');
const Product = require('../models/product.model');
const Order = require('../models/order.model');
const User = require('../models/user.model');
const sendRegistrationEmail = require('../utils/mailler');
const { Op } = require('sequelize');

const postHistory = async (data, res) => {
  try {
    const historyValue = await History.bulkCreate([data]);
    await sendRegistrationEmail(data);
    res.status(200).json({ message: 'Post History successfully', historyValue });
  } catch (err) {
    res.status(500).json({ message: 'Error creating History', err });
  }
};

const getAllHistoryByIdOrder = async (req, res) => {
  try {
    const result = await History.findAll({
      include: [
        {
          model: Product,
        },
        {
          model: Order,
        },
      ],
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Error', error: err });
  }
};

const getHistoryByIdOrder = async (id, res) => {
  try {
    const result = await History.findAll({
      attributes: [
        'order_id',
        'quantity',
        'size_product',
        'email',
        'address',
        'phone',
        'status',
        'order_date',
        'product_id',
      ],
      include: [
        {
          model: Product,
          attributes: ['name', 'type', 'image', 'price'],
        },
      ],
      where: {
        order_id: id,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Error', error: err });
  }
};

const getHistoryWithMonth = async (req, res) => {
  const { dataMonth } = req.body;
  try {
    const result = await History.findAll({
      include: [
        {
          model: Product,
        },
        {
          model: Order,
        },
      ],
      where: {
        status: 4,
        order_date: {
          [Op.gte]: new Date(`2023-${dataMonth}-01T00:00:00.000Z`),
          [Op.lt]: new Date(`2023-${dataMonth}-01T00:00:00.000Z`).setMonth(dataMonth),
        },
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error', error: err });
  }
};

const updateHistoryStatus = async (id, data, res) => {
  try {
    const result = await History.update(data, {
      where: {
        id: id,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Error Update History', err });
  }
};
module.exports = { postHistory, getHistoryByIdOrder, getAllHistoryByIdOrder, updateHistoryStatus, getHistoryWithMonth };
