const Sequelize = require("sequelize");
let sequelize = require('../db');

const Steve = sequelize.define("steve", {
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
    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        primaryKey: false,
        allowNull: false
    },
    appearanceDna: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
            isAlphanumeric: true
        },
    },
    skillsDna: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
            isAlphanumeric: true
        },
    },
    status: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        primaryKey: false,
        allowNull: false
    },

});

module.exports = Steve;
