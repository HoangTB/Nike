const productServices = require('../services/product.services');

const getProduct = (req, res) => {
  productServices.getProduct(req, res);
};

const getProductLast = (req, res) => {
  productServices.getProductLast(req, res);
};

const getProductById = (req, res) => {
  const id = req.params.id;
  productServices.getProductById(id, res);
};

const postProduct = (req, res) => {
  const data = req.body;
  productServices.postProduct(data, res);
};

const postProductNotJson = (req, res) => {
  const data = req.body;
  const file = req.file;
  productServices.postProductNotJson(data, file, req, res);
};

const deleteProductById = (req, res) => {
  const id = req.params.id;
  productServices.deleteProductById(id, res);
};

const updateProductById = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  productServices.updateProductById(id, data, res);
};

const updateProductNotJson = (req, res) => {
  const data = req.body;
  const file = req.file;
  productServices.updateProductNotJson(data, file, req, res);
};

const getProductMergerId = (req, res) => {
  const id = req.params.id;
  productServices.getProductMergerId(id, res);
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
