let Steve = require('../models/steve');

let SteveService = {

    STATUS_NEW: 0,
    STATUS_POTION: 1,
    STATUS_USED: 2,

    create: function (name, ownerId) {

        //TODO add service of queries to blockchain;

        return Steve.create({
            userId: ownerId,
            name: name,
            skillsDna: '0x' + Math.floor(Math.random()*Math.pow(16, 8)).toString(16).toUpperCase() + Math.floor(Math.random()*Math.pow(16, 8)).toString(16).toUpperCase(),
            appearanceDna: '0x' + Math.floor(Math.random()*Math.pow(16, 8)).toString(16).toUpperCase() + Math.floor(Math.random()*Math.pow(16, 8)).toString(16).toUpperCase(),
            status: this.STATUS_NEW
        });
    },

};

module.exports = SteveService;