/**
 * 用户相关逻辑
 */
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
const userLogin = (username, password) => {};

module.exports = {
	userRegister,
	userLogin,
};
