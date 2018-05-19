const { conn, Sequelize } = require('../conn');
const jwt = require('jwt-simple');
const KEY = process.env.KEY

const User = conn.define('user', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  level: {
      type: Sequelize.Integer,
      allowNull: false,
      validate: {
          notEmpty: true
      }
  }
}, {
  timestamps: false
})

User.authenticate = function(credentials) {
  const { username, password } = credentials
  return this.findOne({
    where: {
      username,
      password
    }
  })
  .then( user => {
    if (user) return jwt.encode({id: user.id}, KEY)
    throw { status: 401 }
  })
}

User.exchangeTokenForUser = function(token) {
  try {
    const userId = jwt.decode(token, KEY).id
    return this.findById(userId)
      .then( user => {
        if(user) return user
        throw { status: 401 }
      })
  }
  catch(ex) {
    return Promise.reject({
      status: 401
    })
  }
}

module.exports = User;