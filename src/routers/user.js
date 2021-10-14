/**
 * 用户相关的路由
 */
const express = require('express');
const router = express.Router();
const {
	userRegister,
	userLogin,
	userQuery,
	userUpdate,
} = require('../controller/user');
const { success, error, bad_request } = require('../config/error');

// 用户注册
router.post('/register', async (req, res) => {
	const {
		body: { username, password },
	} = req;
	// 参数判空处理
	if (username && password) {
		// 先查询数据是否已存在
		// 注册逻辑
		const user = await userRegister(username, password);
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
router.post('/login', async (req, res) => {
	const {
		body: { username, password },
	} = req;
	// 判空处理
	if (username && password) {
		const user = await userLogin(username, password);
		if (user) {
			res.status(200).send(success);
		} else {
			res.status(500).send(error);
		}
	} else {
		res.status(400).send(bad_request);
	}
});

// 用户查询
router.get('/queryUser', async (req, res) => {
	const {
		query: { username },
	} = req;
	// 参数判空处理
	if (username) {
		const user = await userQuery(username);
		if (user) {
			res.status(200).send({ ...success, data: { ...user } });
		} else {
			res.status(500).send(error);
		}
	} else {
		res.status(400).send(bad_request);
	}
});

// 用户更新
router.post('/updateUser', (req, res) => {
	const {
		body: { username, password, signature, avatar },
	} = req;
	// 参数判空处理
	if (username) {
		const user = userUpdate({ username, password, signature, avatar });
		if (user) {
			res.status(200).send({ ...success, msg: 'update success' });
		} else {
			res.status(500).send(error);
		}
	} else {
		res.status(400).send(bad_request);
	}
});

module.exports = router;
