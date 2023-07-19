const Image = require('../models/image.model');
const ImageJson = require('../../libraries/database/image.json');

const postImage = async (data, res) => {
  try {
    console.log(ImageJson);
    const createdImage = await Image.bulkCreate(
      ImageJson.map((image) => ({
        id: image.id,
        image_1: image.image_1,
        image_2: image.image_2,
        image_3: image.image_3,
        image_4: image.image_4,
        product_id: image.product_id,
      }))
    );
    console.log(`Created ${createdImage.length} products`);
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

const postImageNotJson = async (req, res) => {
  try {
    const url = req.protocol + '://' + req.get('host');
    const fileData = {
      image_1: url + '/images/' + req.files[0].filename,
      image_2: url + '/images/' + req.files[1].filename,
      image_3: url + '/images/' + req.files[2].filename,
      image_4: url + '/images/' + req.files[3].filename,
      product_id: req.body.product_id,
    };
    const result = await Image.create(fileData);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to create products', err });
  }
};

const updateImageNotJson = async (req, res) => {
  try {
    const url = req.protocol + '://' + req.get('host');
    const fileData = {
      image_1: url + '/images/' + req.files[0].filename,
      image_2: url + '/images/' + req.files[1].filename,
      image_3: url + '/images/' + req.files[2].filename,
      image_4: url + '/images/' + req.files[3].filename,
      product_id: req.body.product_id,
    };
    const result = await Image.update(fileData, {
      where: {
        product_id: req.params.id,
      },
    });
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to create products', err });
  }
};

module.exports = { postImage, postImageNotJson, updateImageNotJson };
