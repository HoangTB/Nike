const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const productController = require('../controllers/product.controller');

router.get('/', productController.getProduct);
router.get('/last', productController.getProductLast);
router.get('/:id', productController.getProductById);
router.get('/order-orderDetail/:id', productController.getProductMergerId);
router.post('/create', productController.postProduct);
router.post('/admin-create', upload.single('image'), productController.postProductNotJson);
router.delete('/delete/:id', productController.deleteProductById);
router.patch('/update/:id', productController.updateProductById);
router.patch('/admin-update/:id', upload.single('image'), productController.updateProductNotJson);

module.exports = router;
