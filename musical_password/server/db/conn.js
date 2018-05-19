const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/musical_passwords', {
  logging: false
});

module.exports = { conn, Sequelize };