const express = require('express');
const router = express.Router();
const update = require('../middlewares/upload');
const imageController = require('../controllers/image.controller');

router.post('/', imageController.postImage);
router.post('/admin-create', update.array('images', 4), imageController.postImageNotJson);
router.patch('/admin-update/:id', update.array('images', 4), imageController.updateImageNotJson);
module.exports = router;
