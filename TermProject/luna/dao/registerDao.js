const dbPool = require("../config/poolConfig");

module.exports = {
    registerDB(arr, cb) {
        console.log("registerDao" + arr);
        const sql = "INSERT INTO user VALUES (?,?,?)";
        dbPool.connect(sql, arr, function (err, data) {
            cb(err, data);
            // console.log("registerDB" + data);
        });
    }
}