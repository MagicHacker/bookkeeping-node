/**
 * 用户相关逻辑
 */
const { Op } = require('sequelize');
const { User } = require('../model/users');
// 用户注册controller
const userRegister = async (username, password) => {
	try {
		const user = await User.create({
			username,
			password,
		});
		return user;
	} catch (error) {
		console.error('error msg:', error);
	}
};

// 用户登录controller
const userLogin = async (username, password) => {
	try {
		const user = User.findOne({
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
		});
		return user;
	} catch (error) {
		console.error('error msg:', error);
	}
};

module.exports = {
	userRegister,
	userLogin,
};
