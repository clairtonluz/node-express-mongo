const config = require('.');

module.exports = {
  host: config.database.host,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  dialect: config.database.dialect,
  storage: config.database.storage,
  logging: config.database.logging,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
