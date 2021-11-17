const dbPool = require("../config/poolConfig");

module.exports = {
    loginDB(arr, cb) {
        console.log("dao" + arr);
        const sql = "SELECT * FROM user WHERE username = ? and password = ?";
        dbPool.connect(sql, arr, function (err, data) {
            cb(err, data);
            console.log("loginDB" + data);
        });
    }
}