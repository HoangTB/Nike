const Product = require('../models/product.model');
const User = require('../models/user.model');
const Image = require('../models/image.model');
const Order = require('../models/order.model');
const OrderDetail = require('../models/orderDetail.model');
const History = require('../models/history.model');

const ProductJson = require('../../libraries/database/product.json');

const getProductLast = async (req, res) => {
  try {
    const products = await Product.findAll();

    if (products.length > 0) {
      const lastProduct = products.pop();
      res.status(200).json(lastProduct);
    } else {
      res.status(404).json({ message: 'No products found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error Get Product', err });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Image,
        },
      ],
    });

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error Get Product', err });
  }
};
const getProductById = async (id, res) => {
  try {
    const product = await Product.findAll({
      include: [
        {
          model: Image,
        },
      ],
      where: {
        id: id,
      },
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error Get Product', err });
  }
};

const postProduct = async (data, res) => {
  try {
    console.log(ProductJson);
    const createdProducts = await Product.bulkCreate(
      ProductJson.map((product) => ({
        id: product.id,
        name: product.name,
        type: product.type,
        image: product.image,
        price: product.price,
        new: product.new,
        quantity_inventory: product.quantity_inventory,
      }))
    );
    console.log(`Created ${createdProducts.length} products`);
    res.status(200).json({ message: 'Products created successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to create products', err });
  }

  // try {
  //   console.log(data);
  //   const productValues = await Product.bulkCreate([data]);
  //   res.status(200).json({ message: 'Post successfully', productValues });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json({ message: 'Failed to create products', err });
  // }
};

const postProductNotJson = async (data, file, req, res) => {
  try {
    const url = req.protocol + '://' + req.get('host');
    const fileData = {
      image: url + '/images/' + file.filename,
      name: data.name,
      type: data.type,
      price: data.price,
      new: data.new,
      quantity_inventory: data.quantity_inventory,
    };
    const result = await Product.create(fileData);
    return res.status(200).json(fileData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to create products', err });
  }
};

const deleteProductById = async (id, res) => {
  try {
    const product = await Product.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: 'Delete successfully !' });
  } catch (err) {
    res.status(500).json({ message: 'Error Delete Product', err });
  }
};

const updateProductById = async (id, data, res) => {
  try {
    const productUpdate = await Product.update(data, {
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: 'Update successfully !', productUpdate });
  } catch (err) {
    res.status(500).json({ message: 'Error Update Product', err });
  }
};

const updateProductNotJson = async (data, file, req, res) => {
  try {
    const url = req.protocol + '://' + req.get('host');
    const fileData = {
      image: url + '/images/' + file.filename,
      name: data.name,
      type: data.type,
      price: data.price,
      new: data.new,
      quantity_inventory: data.quantity_inventory,
    };
    const result = await Product.update(fileData, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(fileData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to create products', err });
  }
};

const getProductMergerId = async (id, res) => {
  try {
    const result = await Order.findAll({
      attributes: ['status', 'order_date', 'user_id'],
      include: [
        {
          model: OrderDetail,
          attributes: ['quantity', 'size_product', 'product_id'],
          include: [
            {
              model: Product,
              attributes: ['name', 'type', 'image', 'price'],
            },
          ],
        },
      ],
      where: {
        user_id: id,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'error', err });
  }
};

module.exports = {
  getProduct,
  getProductById,
  postProduct,
  deleteProductById,
  updateProductById,
  getProductMergerId,
  postProductNotJson,
  getProductLast,
  updateProductNotJson,
};
