require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  jwt: {
    secret: process.env.JWT_SECRET,
    issuer: process.env.JWT_ISSUER,
    expiresIn: process.env.JWT_EXPIRES_IN,
    refreshSecret: process.env.JWT_SECRET + "refresh",
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  },
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
