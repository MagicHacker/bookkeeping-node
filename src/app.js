/**
 * 主入口文件
 */
const express = require('express')
const config = require('./config')
const router = require('./router')
const morgan = require('morgan')
const app = express()

// 解析请求体
app.use(express.json())
app.use(express.urlencoded())
// 日志记录
app.use(morgan('short'))
// 托管静态资源
app.use(express.static('./public'))
// 挂载路由
app.use(router)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${config.port}`)
})