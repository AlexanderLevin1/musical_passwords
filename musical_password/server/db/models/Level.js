/* eslint-disable */
const { conn, Sequelize } = require('../conn');

const Level = conn.define('level', {
    answer: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Level must have an answer'
            }
        }
    }
}, {
        timestamps: false
    })

module.exports = Promo;