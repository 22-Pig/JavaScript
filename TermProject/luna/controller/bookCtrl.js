const bookDao = require("../dao/bookDao");

// var list = [];

module.exports = {
    getBook(req, resp) {
        let sql = "SELECT * FROM book";
        bookDao.BookDao(sql, [], function (err, data) {
            if (data.length > 0) {
                // 在这里修改数据
                // let queryData = JSON.stringify(data);
                // list = queryData;
                /* for (var i = 0; i < list.length; i++) {
                    
                } */
                resp.send(data);
            }
        });
    },
    addbook: (req, resp) => {
        let id = req.body.bookId;
        let name = req.body.bookName;
        let value = req.body.bookValue;
        let message = req.body.bookMessage;

        let bookArr = [id, name, value, message];
        console.log("addbook#1" + bookArr);
        bookDao.addDB(bookArr, function (err, data) {
            console.log("addbook#2" + data);
            if (err) {
                console.log("addbook#3" + err);
                return;
            } else {
                if (data) {
                    resp.redirect("/page/book.html");
                }
                else {
                    resp.send("添加失败!");
                }
            }
        });
    },
    updatebook: (req, resp) => {
        let id = req.body.bookId;
        let name = req.body.bookName;
        let value = req.body.bookValue;
        let message = req.body.bookMessage;

        let bookArr = [name, value, message, id];
        console.log("updatebook#1" + bookArr);
        bookDao.updateDB(bookArr, function (err, data) {
            console.log("updatebook#2" + data);
            if (err) {
                console.log("updatebook#3" + err);
                return;
            } else {
                if (data) {
                    resp.redirect("/page/book.html");
                }
                else {
                    resp.send("修改失败!");
                }
            }
        });
    },
    querybook: (req, resp) => {
        bookDao.queryDB(function (err, data) {
            if (err) {
                console.log("querybook#1" + err);
                return;
            } else {
                if (data) {
                    resp.send(data);
                } else {
                    resp.redirect("/index.html");
                }
            }
        });
    },
    queryOnebook(req, resp) {
        let id = req.body.bookId;
        let name = req.body.bookName;

        let bookArr = [id, name];
        console.log("queryOnebook#1" + bookArr);
        bookDao.queryOneDB(bookArr, function (err, data) {
            if (err) {
                console.log("queryOnebook#2" + err);
                return;
            } else {
                if (data) {
                    let queryData = JSON.stringify(data);
                    console.log("queryOnebook" + queryData);
                    queryData = queryData.replace(/id/g, "图书ID");
                    queryData = queryData.replace(/name/g, "图书名");
                    queryData = queryData.replace(/value/g, "图书价格");
                    queryData = queryData.replace(/message/g, "图书信息");


                    resp.send(queryData);
                }
            }
        });
    },
    getBookData(req, resp) {
        let sql = "SELECT * FROM book order by id";
        bookDao.BookDao(sql, [], function (err, data) {
            console.log("getBookData#1" + data);
            if (data.length > 0) {
                // 在这里修改数据
                let queryData = JSON.stringify(data);
                console.log("getBookData#2" + queryData);
                queryData = queryData.replace(/id/g, "图书ID");
                queryData = queryData.replace(/name/g, "图书名");
                queryData = queryData.replace(/value/g, "图书价格");
                queryData = queryData.replace(/message/g, "图书信息");


                resp.send(queryData);
            }
        });
    },
    getPage(req, resp) {
        let sql = "select count(*) as 'pageNum' from book";
        bookDao.BookDao(sql, [], function (err, data) {
            console.log("getPage#1" + data);
            if (data) {
                resp.send(data);
            }
        });
    },
    getPageData(req, resp) {
        let { pageNum, pageDataNum } = req.body;
        let arr = [];
        pageNum = (pageNum - 1) * pageDataNum;
        arr.push(pageNum);
        arr.push(Number(pageDataNum));
        console.log("getPageData#1" + arr);
        let sql = "SELECT * FROM book order by id limit ?,?";
        bookDao.BookDao(sql, arr, function (err, data) {
            console.log("getPageData#2" + data);
            console.log("getPageData#3" + err);
            if (data) {
                let queryData = JSON.stringify(data);
                console.log("getPageData#4" + queryData);
                queryData = queryData.replace(/id/g, "图书ID");
                queryData = queryData.replace(/name/g, "图书名");
                queryData = queryData.replace(/value/g, "图书价格");
                queryData = queryData.replace(/message/g, "图书信息");
                resp.send(queryData);
            }
        })
    },
    delbookPost(req, resp) {
        let { bookId } = req.body;
        console.log("delbookPost#1" + bookId);
        let sql = "DELETE FROM book WHERE id = ?";
        bookDao.BookDao(sql, bookId, function (err, data) {
            console.log("delbookPost#2" + err);
            console.log("delbookPost#3" + data);
            if (data) {
                resp.send("1");
            }
        });
    },
    searchBook(req, resp) {
        // console.log("searchBook#1" + req.body);
        let { bookName, bookValue, bookMessage } = req.body //变量对对象的解构赋值
        let arr = [];
        let sql = "SELECT * FROM book INNER JOIN park ON book.message = park.localid where 1=1";
        let order = "order by id";
        if (bookName != "") {
            bookName = bookName + '%';
            sql = `${sql} and name like ? `;
            arr.push(bookName);
        }
        if (bookValue != "") {
            sql = `${sql} and value >= ? `;
            arr.push(bookValue);
        }
        if (bookMessage != "") {
            sql = `${sql} and message = ? `;
            arr.push(bookMessage);
        }
        sql = sql + order;
        console.log("searchBook#2" + sql);
        if (bookName & bookValue & bookMessage == "") {
            sql = "SELECT * FROM book";
        }
        bookDao.BookSearchDao(sql, arr, (err, data) => {
            console.log("searchBook" + data);
            console.log("searchBook#3" + data);
            console.log("searchBook#4" + err);
            if (data) {
                let queryData = JSON.stringify(data);
                console.log("searchBook" + queryData);
                queryData = queryData.replace(/id/g, "图书ID");
                queryData = queryData.replace(/name/g, "图书名");
                queryData = queryData.replace(/value/g, "图书价格");
                queryData = queryData.replace(/message/g, "图书信息");


                resp.send(queryData);
            }
        });
        console.log("searchBook#5" + bookName, bookValue, bookMessage);
    },
}