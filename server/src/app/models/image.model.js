const { DataTypes } = require('sequelize');
const sequelize = require('../../libraries/database/db.connect');
const Product = require('../models/product.model');
const Image = sequelize.define(
  'Images',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image_1: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image_2: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image_3: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image_4: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'Images',
    modelName: 'Image',
    timestamps: false,
  }
);
Image.belongsTo(Product, { foreignKey: 'product_id', onDelete: 'CASCADE' });
Product.hasMany(Image, { foreignKey: 'product_id' });
Image.sync()
  .then(() => {
    console.log('Create Image successfully');
  })
  .catch((error) => {
    console.error('Error create Image:', error);
  });

module.exports = Image;
