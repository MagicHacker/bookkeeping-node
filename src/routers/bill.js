/**
 * 账单相关的路由
 */
const express = require('express');
const router = express.Router();
const { bad_request, error, success } = require('../config/error');
const { billAdd } = require('../controller/bill');
// 添加账单
router.post('/billAdd', async (req, res) => {
	const {
		body: { pay_type, amount, date, type_id, type_name, remark = '' },
	} = req;
	// 参数判空处理
	if (pay_type || amount || date || type_id || type_name) {
		// 获取token
		const bill = await billAdd(
			pay_type,
			amount,
			date,
			type_id,
			type_name,
			remark,
		);
		if (bill) {
			res.status(200).send({ ...success, ...bill });
		} else {
			res.status(500).send(error);
		}
	} else {
		res.status(400).send(bad_request);
	}
});
module.exports = router;
