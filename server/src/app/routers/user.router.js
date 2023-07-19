const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const checkAuthentication = require('../middlewares/checkAuth');
const checkRole = require('../middlewares/checkRole');
router.get('/', userController.getUser);
router.get('/:id', userController.getUserId);
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.patch('/update-user/:id', userController.updateUser);
router.patch('/update-status/:id', checkRole, userController.updateStatusByAdmin);
router.patch('/update-role/:id', checkRole, userController.updateRoleByAdmin);

module.exports = router;
