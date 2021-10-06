/**
 * 主入口文件
 */
const express = require('express');
const config = require('./config');
const routers = require('./routers');
const morgan = require('morgan');
const app = express();

const { port = 3000 } = config;
// 解析请求体
app.use(express.json());
app.use(express.urlencoded());
// 日志记录
app.use(morgan('short'));
// 托管静态资源
app.use(express.static('./public'));
// 挂载路由
routers.forEach(router => {
	app.use('/api', router);
});
// 监听
app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
