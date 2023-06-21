// const { check_UserModel } = require('backend/database/models/user');
const {check_UserModel} = require('../database/models');
const {createUser, getUser, authUser} = require('../controllers/userController');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  check_UserModel();
  res.send('respond with a resource');
});
router.get('/getUser', getUser);
router.post('/authUser', authUser);

// POST users listing
router.post('/createUser', createUser);

module.exports = router;
