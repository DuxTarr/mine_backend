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
            skillsDna: '0xFF9900',
            appearanceDna: '0xFF9900',
            status: this.STATUS_NEW
        });
    },

};

module.exports = SteveService;