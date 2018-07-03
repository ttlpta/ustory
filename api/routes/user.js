const express = require('express');
const router = express.Router();

const userCtrl = require('../Controller/UserController');

router.put('/loginFb', userCtrl.loginFb);
router.post('/login', userCtrl.login);
router.put('/logingg', userCtrl.logingg);
router.post('/regist', userCtrl.regist);

router.get('/auth/detail', userCtrl.detail);
router.put('/auth/logout', userCtrl.logout);

module.exports = router;
