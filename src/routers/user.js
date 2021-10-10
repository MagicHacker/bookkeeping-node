/**
 * 用户相关的路由
 */
const express = require('express');
const router = express.Router();
const { userRegister, userLogin } = require('../controller/user');
const { success, error, bad_request } = require('../config/error');

// 用户注册
router.post('/register', (req, res) => {
	const {
		body: { username, password },
	} = req;
	// 参数判空处理
	if (username && password) {
		// 先查询数据是否已存在
		// 注册逻辑
		const user = userRegister(username, password);
		if (user) {
			res.status(200).send(success);
		} else {
			res.status(500).send(error);
		}
	} else {
		res.status(400).send(bad_request);
	}
});

// 用户登录
router.post('/login', (req, res) => {
	const {
		body: { username, password },
	} = req;
	// 判空处理
	if (username && password) {
		const user = userLogin(username, password);
		if (user) {
			res.status(200).send(success);
		} else {
			res.status(500).send(error);
		}
	} else {
		res.status(400).send(bad_request);
	}
});

module.exports = router;
