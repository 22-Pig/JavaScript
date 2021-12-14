const registerDao = require("../dao/registerDao");

module.exports = {

    register: (req, resp) => {
        let username = req.body.userName;
        let password = req.body.passWord;
        let message = req.body.messAge;

        let registerArr = [username, password, message];
        // console.log("registerArr" + registerArr);

        registerDao.registerDB(registerArr, function (err, data) {
            if (err) {
                return;
            }
            else {
                // console.log("registerCtrl:" + data.length);
                console.log("registerCtrl:" + data);
                if (data) {
                    resp.send({ succ: true });
                } else {
                    resp.send({ succ: false });
                }
            }
        });
    },
}