const express = require('express');
const router = express.Router();

const orderDetailController = require('../controllers/orderDetail.controller');

router.get('/:id', orderDetailController.getOrderDetailById);
router.post('/', orderDetailController.postOrderDetail);
router.patch('/quantity/:id', orderDetailController.updateOrderDetailQuantity);
router.patch('/update/:id', orderDetailController.updateOrderDetailById);
router.delete('/delete/:id', orderDetailController.deleteOrderDetail);
router.delete('/delete-history/:id', orderDetailController.deleteOrderDetailByHistory);
module.exports = router;
