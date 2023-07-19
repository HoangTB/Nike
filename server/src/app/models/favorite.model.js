const { DataTypes } = require('sequelize');
const sequelize = require('../../libraries/database/db.connect');
const User = require('../models/user.model');
const Product = require('../models/product.model');
const Favorite = sequelize.define(
  'Favorites',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    tableName: 'Favorites',
    timestamps: false,
  }
);

Favorite.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Favorite.belongsTo(Product, { foreignKey: 'product_id', onDelete: 'CASCADE' });

// Sync the models with the database
Favorite.sync()
  .then(() => {
    console.log('Create Favorite successfully');
  })
  .catch((err) => {
    console.log('Error create Favorite: ', err);
  });
