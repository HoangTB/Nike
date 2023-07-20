const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const sceretKey = require('../../configs/jwt.configs');
var bcrypt = require('bcryptjs');

const getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Get users failed', err });
  }
};
const getUserId = async (id, res) => {
  try {
    const users = await User.findAll({
      where: {
        id: id,
      },
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Get users failed', err });
  }
};

const createUser = async (data, res) => {
  const { email, password, firstName, lastName, birthday, role, status } = data;
  try {
    const emailCheck = await User.findOne({ where: { email } });

    if (emailCheck) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ ...data, password: hashedPassword });

    res.status(200).json({ message: 'Create User Successfully', user });
  } catch (err) {
    console.error('Error handling register', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const loginUser = async (data, res) => {
  // get username vs password ở body
  const { email, password } = data;
  try {
    // Kiểm tra username và trả về toàn bộ data
    const user = await User.findOne({ where: { email } });
    // Nếu có user thì so sánh password bằng hàm compare
    if (user) {
      const myPass = await bcrypt.compare(password, user.dataValues.password);
      if (myPass) {
        const accessToken = jwt.sign(user.dataValues, sceretKey);
        res.status(200).json({
          user: user,
          accessToken,
        });
      } else {
        res.status(401).json({ message: 'Password was wrong' });
      }
    } else {
      // Nếu sai thì báo lỗi
      res.status(401).json({ message: 'Email or password does not exist !' });
    }
  } catch (error) {
    res.status(404).json({ message: 'Not found' });
  }
};

const updateUser = async (data, id, res) => {
  try {
    const userUpdate = await User.update(data, {
      where: { id: id },
    });
    res.status(200).json({ message: 'Updated user successfully', userUpdate });
  } catch (error) {
    res.status(404).json({ message: 'Update user  error' });
  }
};

const updateStatusByAdmin = async (id, res) => {
  try {
    const currentUser = await User.findOne({ where: { id } });
    const newStatus = currentUser.status === 1 ? 2 : 1;
    const userUpdate = await User.update(
      { status: newStatus },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ message: 'Update successfully', userUpdate });
  } catch (error) {
    res.status(404).json({ message: ' Update Error' });
  }
};

const updateRoleByAdmin = async (id, res) => {
  try {
    const currentUser = await User.findOne({ where: { id } });
    console.log(111, currentUser.role);
    const newRole = currentUser.role === 1 ? 2 : 1;
    const userUpdate = await User.update(
      { role: newRole },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ message: 'Update successfully', userUpdate });
  } catch (error) {
    res.status(404).json({ message: ' Update Error' });
  }
};

module.exports = { getUser, createUser, loginUser, updateUser, updateStatusByAdmin, updateRoleByAdmin, getUserId };
