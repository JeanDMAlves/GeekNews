const Sequelize = require('sequelize')
const database = require('./db')

const Messages = database.define('messages', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Message: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Messages 