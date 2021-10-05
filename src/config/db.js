/**
 * 数据库配置
 */

module.exports = {
    database: 'bookkeeping',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'zhang2684323',
    dialect: 'mysql',
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000
    }
}