const express = require('express');
const router = express.Router();

const userCtrl = require('../Controller/UserController');

router.put('/loginFb', userCtrl.regist);

module.exports = router;
