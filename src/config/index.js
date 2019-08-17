require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  database: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE,
    logging: process.env.DB_LOGGING || false,
  }
}
