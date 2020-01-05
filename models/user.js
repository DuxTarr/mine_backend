const Sequelize = require("sequelize");
var sequelize = require('../db');

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
            isAlpha: true,
        },
    },

});

module.exports = User;
