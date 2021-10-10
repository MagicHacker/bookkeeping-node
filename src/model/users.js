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
			comment: '用户名',
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			comment: '密码',
		},
		signature: {
			type: DataTypes.STRING,
			allowNull: true,
			comment: '个性签名',
		},
		avatar: {
			type: DataTypes.STRING,
			allowNull: true,
			comment: '头像',
		},
		createdAt: {
			type: DataTypes.TIME,
			field: 'ctime',
		},
		updatedAt: {
			type: DataTypes.TIME,
			field: 'uptime',
		},
	},
	{
		freezeTableName: true, // 强制表名称=模型名称，防止sequelize自动复数化表名
	},
);

module.exports = {
	User,
};
