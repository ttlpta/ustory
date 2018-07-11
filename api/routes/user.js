const express = require('express');
const router = express.Router();

const userCtrl = require('../Controller/UserController');

router.post('/regist', userCtrl.regist);
router.post('/login', userCtrl.login);
router.put('/loginFb', userCtrl.loginFb);
router.put('/logingg', userCtrl.logingg);
router.put('/auth/logout', userCtrl.logout);

router.get('/auth/detail', userCtrl.detail);
router.put('/auth/detail', userCtrl.updateProfile);

module.exports = router;
