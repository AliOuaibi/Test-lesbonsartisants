const express = require('express');
const router = express.Router();

const UserCtrl = require('../controllers/user-ctrl')


router.post('/register', UserCtrl.postRegister);

router.post('/login', UserCtrl.postLogin)

module.exports = router;