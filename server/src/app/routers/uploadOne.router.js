const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const UpLoadOneModel = require('../models/uploadOne.model');
router.post('/', upload.single('uploadOne'), async (req, res, next) => {
  try {
    console.log(req);
    const url = req.protocol + '://' + req.get('host');
    const fileData = {
      image: url + '/images/' + req.file.filename,
      name: req.body.name,
    };
    const result = await UpLoadOneModel.create(fileData);
    return res.status(200).json({ image: result });
  } catch (error) {
    res.status(500).json({ message: 'loi' });
  }
});

module.exports = router;
