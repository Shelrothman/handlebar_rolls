const orm = require("../config/orm.js");


const roll = {
    selectAll: (cb) => {
        orm.selectAll("rolls", (res) => {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: (newRoll, cb) => {
        orm.insertOne("rolls", newRoll, (res) => {
            cb(res);
        });
    },
    updateOne: (rollData, criteria, cb) => {
        orm.updateOne("rolls", rollData, criteria, (res) => {
            cb(res);
        });
    },
};

module.exports = roll;