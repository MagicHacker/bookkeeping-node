/**
 * 连接数据库，生成sequelize实例
 */
const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db');

const sequelize = new Sequelize(
	dbConfig.database,
	dbConfig.username,
	dbConfig.password,
	{
		host: dbConfig.host,
		dialect: dbConfig.dialect,
		pool: dbConfig.pool,
	},
);

module.exports = {
	sequelize,
};
