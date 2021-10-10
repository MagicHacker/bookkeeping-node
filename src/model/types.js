/**
 * 账单类型模型
 */
const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/sequelize');

const Types = sequelize.define('type', {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		comment: '标签名称',
	},
	type: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
		comment: '标签类型',
	},
});

module.exports = {
	Types,
};
