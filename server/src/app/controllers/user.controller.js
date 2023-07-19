const userServices = require('../services/user.services');

const getUser = (req, res) => {
  userServices.getUser(req, res);
};

const getUserId = (req, res) => {
  const id = req.params.id;
  userServices.getUserId(id, res);
};

const createUser = (req, res) => {
  const data = req.body;
  userServices.createUser(data, res);
};

const loginUser = (req, res) => {
  const data = req.body;
  userServices.loginUser(data, res);
};

const updateUser = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  userServices.updateUser(data, id, res);
};

const updateStatusByAdmin = (req, res) => {
  const id = req.params.id;
  userServices.updateStatusByAdmin(id, res);
};

const updateRoleByAdmin = (req, res) => {
  const id = req.params.id;
  userServices.updateRoleByAdmin(id, res);
};
module.exports = { getUserId, getUser, createUser, loginUser, updateStatusByAdmin, updateRoleByAdmin, updateUser };
