/**
 * 测试文件
 */

const  { sequelize }= require('./utils/sequelize')

try {
    sequelize.authenticate()
    console.log('Connection has been established successfully.')
} catch (error) {
    console.error('Unable to connect to the database:', error)
}