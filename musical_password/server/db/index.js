/* eslint-disable */
const { conn } = require('./conn');
const User = require('./models/User');
const Level = require('./models/Level');

// ***** CHECK THIS????? 
Level.hasMany(User);

const sync = () => {
  return conn.sync({ force: true });
};

module.exports = {
  sync,
  models: {
   User,
   Level
  }
};