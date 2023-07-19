const { DataTypes } = require('sequelize');
const sequelize = require('../../libraries/database/db.connect');

const User = sequelize.define(
  'Users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    tableName: 'Users',
    timestamps: false,
  }
);

// Sync the model with the database
User.sync()
  .then(() => {
    console.log('Create Users successfully');
  })
  .catch((err) => {
    console.log('Error create Users: ', err);
  });
module.exports = User;
