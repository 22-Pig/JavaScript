const loginDao = require("../dao/loginDao");

module.exports = {

    login: (req, resp) => {
        let username = req.body.userName;
        let password = req.body.passWord;

        let loginArr = [username, password];
        console.log("loginArr" + loginArr);

        loginDao.loginDB(loginArr, function (err, data) {
            if (err) {
                return;
            }
            else {
                // console.log("loginCtrl:" + data.length);
                console.log("loginCtrl:" + data);
                if (data.length == 1) {
                    resp.redirect("/page/shop.html");
                    // resp.send('1');
                } else {
                    // resp.send('0');
                    // resp.redirect("/page/shop.html");
                    // resp.redirect("/page/user.html");
                }
            }
        });
    },
}