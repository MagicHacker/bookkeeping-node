/**
 * 主入口文件
 */
const express = require('express')
const config = require('./config')
const router = require('./router')
const app = express()

// 挂载路由
app.use(router)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${config.port}`)
})