const orm = require("../config/orm.js");


const sushi = {
    selectAll: (cb) => {
        orm.all("rolls", (res) => {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: (newRoll, cb) => {
        orm.create("rolls", newRoll, (res) => {
            cb(res);
        });
    },
    updateOne: (sushiData, criteria, cb) => {
        orm.update("rolls", sushiData, criteria, (res) => {
            cb(res);
        });
    },
};

module.exports = sushi;