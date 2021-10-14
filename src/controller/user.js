/**
 * 用户相关逻辑
 */
const { Op } = require('sequelize');
const { Users } = require('../model');
// 用户注册controller
const userRegister = async (username, password) => {
	try {
		const user = await Users.create({
			username,
			password,
		});
		return user;
	} catch (error) {
		console.error('userRegister error msg:', error);
	}
};

// 用户登录controller
const userLogin = async (username, password) => {
	try {
		const user = await Users.findOne({
			where: {
				[Op.and]: [
					{
						username,
					},
					{
						password,
					},
				],
			},
			raw: true,
		});
		return user;
	} catch (error) {
		console.error('userLogin error msg:', error);
	}
};
// 用户信息查询
const userQuery = async username => {
	try {
		const user = await Users.findOne({
			where: {
				username,
			},
			raw: true,
		});
		return user;
	} catch (error) {
		console.error('userQuery error msg:', error);
	}
};
// 用户信息更新
const userUpdate = async ({ username, password, signature, avatar }) => {
	try {
		const user = await Users.update(
			{
				password,
				signature,
				avatar,
			},
			{
				where: {
					username,
				},
			},
		);
		return user;
	} catch (error) {
		console.error('userUpdate error msg:', error);
	}
};
module.exports = {
	userRegister,
	userLogin,
	userQuery,
	userUpdate,
};
