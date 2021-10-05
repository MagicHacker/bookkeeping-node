/**
 * 主入口文件
 */
const express = require('express')
const config = require('./config')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${config.port}`)
})