var express = require('express');
var router = express.Router();
const {createMessage, findAllMessages} = require('../controllers/messagesController');

router.post('/createMessage', createMessage);
router.post('/getMessages', findAllMessages);

module.exports = router;
