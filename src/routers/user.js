/**
 * 用户相关的路由
 */

const express = require('express');
const router = express.Router();
const { userRegister, userLogin } = require('../controller/user');

// 用户注册
router.post('/register', (req, res) => {
	const {
		body: { username, password },
	} = req;
	// 注册逻辑
	userRegister(username, password);
	res.status(200).send({
		code: 0,
	});
});

// 用户登录
router.post('/login', (req, res) => {
	const {
		body: { username, password },
	} = req;
	// 登录逻辑
	userLogin(username, password);
	res.status(200).send({
		code: 0,
	});
});

module.exports = router;
