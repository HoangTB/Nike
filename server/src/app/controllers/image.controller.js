const imageServices = require('../services/image.services');

const postImage = (req, res) => {
  const data = req.body;
  imageServices.postImage(data, res);
};

const postImageNotJson = (req, res) => {
  imageServices.postImageNotJson(req, res);
};
const updateImageNotJson = (req, res) => {
  imageServices.updateImageNotJson(req, res);
};
module.exports = { postImage, postImageNotJson, updateImageNotJson };
