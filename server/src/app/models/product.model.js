const { DataTypes } = require('sequelize');
const sequelize = require('../../libraries/database/db.connect');
const Product = sequelize.define(
  'Products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    new: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    quantity_inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'Products',
    modelName: 'Product',
    timestamps: false,
  }
);

// Sync the model with the database
Product.sync()
  .then(() => {
    console.log('Create Product successfully');
  })
  .catch((err) => {
    console.log('Error create Product:', err);
  });

module.exports = Product;
