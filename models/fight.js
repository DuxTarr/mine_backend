const Sequelize = require("sequelize");
let sequelize = require('../db');

const Fight = sequelize.define("fight", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    transactionHash: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isAlphanumeric: true
        },
    },
    winnerId: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        primaryKey: false,
        allowNull: false
    },
    loserId: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        primaryKey: false,
        allowNull: false
    },

});

module.exports = Fight;
