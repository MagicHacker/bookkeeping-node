/**
 * 错误信息处理
 */

module.exports = {
	success: {
		code: 0,
		msg: 'success',
		status: 200,
	},
	error: {
		code: 1,
		msg: 'service error',
		status: 500,
	},
	bad_request: {
		code: 1,
		msg: 'Bad Request',
		status: 400,
	},
	noResult: {
		code: 1,
		msg: '404 no resource',
		status: 404,
	},
	forbidden: {
		code: 1,
		msg: 'Request Forbidden',
		status: 403,
	},
};
