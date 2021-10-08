/**
 * 用户模型
 */
const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/sequelize');

const User = sequelize.define(
	'user',
	{
		// 模型属性对应表的字段
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		signature: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		avatar: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		freezeTableName: true, // 强制表名称=模型名称，防止sequelize自动复数化表名
	},
);

module.exports = {
	User,
};
