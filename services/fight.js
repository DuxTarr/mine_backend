let Fight = require('../models/fight');

let FightService = {

    STATUS_NEW: 0,
    STATUS_POTION: 1,
    STATUS_USED: 2,

    create: function (steveId, enemyId) {

        //TODO add service of queries to blockchain;

        let winnerId = steveId,
            loserId = enemyId;

        console.log(Math.random());
        console.log(Math.random() >= 0.5);
        if (Math.random() >= 0.5) {
            console.log('more');
            loserId = steveId;
            winnerId = enemyId;
        }


        console.log(loserId, winnerId, 'wwwwwwww');
        return Fight.create({
            transactionHash: 'OxFFFF0000FFFF0000' + Date.now(),
            winnerId: winnerId,
            loserId: loserId,
        }).then();
    },

};

module.exports = FightService;