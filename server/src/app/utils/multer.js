//cau hinh multer
const multer = require('multer');
const uuidv4 = require('uuid/v4');
// cau hinh luu tru
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images');
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.toLocaleLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName);
  },
});

module.exports = storage;
