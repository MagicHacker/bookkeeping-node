/**
 * model模型统一管理
 */

const { Users } = require('./users');
const { Bills } = require('./bills');
const { Types } = require('./types');

module.exports = {
	Users,
	Bills,
	Types,
};
