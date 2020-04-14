const Sequelize = require("sequelize");
let sequelize = require('../db');

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isAlphanumeric: true
        },
    },

});

module.exports = User;
