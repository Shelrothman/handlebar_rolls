const orm = require("../config/orm.js");


const sushi = {
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
    updateOne: (sushiData, criteria, cb) => {
        orm.updateOne("rolls", sushiData, criteria, (res) => {
            cb(res);
        });
    },
};

module.exports = sushi;