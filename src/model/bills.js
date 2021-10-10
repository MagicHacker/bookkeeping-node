/**
 * 账单模型
 */
const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/sequelize');

const bill = sequelize.define('bill', {
	pay_type: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 1,
		comment: '账单类型',
	},
	amount: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
		comment: '账单价格',
	},
	date: {
		type: DataTypes.TIME,
		allowNull: false,
		comment: '账单日期',
	},
	type_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
		comment: '账单标签id',
	},
	type_name: {
		type: DataTypes.STRING,
		allowNull: false,
		comment: '账单标签名',
	},
	remark: {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null,
		comment: '备注',
	},
});
module.exports = {
	bill,
};
