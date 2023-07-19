const { DataTypes } = require('sequelize');
const sequelize = require('../../libraries/database/db.connect');
const Product = require('../models/product.model');
const User = require('../models/user.model');
const Review = sequelize.define(
  'Reviews',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: 'Reviews',
    timestamps: false,
  }
);
Review.belongsTo(Product, { foreignKey: 'product_id', onDelete: 'CASCADE' });
Review.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

Review.sync()
  .then(() => {
    console.log('Create Review successfully');
  })
  .catch((error) => {
    console.error('Error create Review:', error);
  });

module.exports = Review;
