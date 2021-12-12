// 拦截请求，分发任务
const express = require("express");
const bookCtrl = require("../controller/bookCtrl");
const router = express.Router();

router.post("/getBook.do", bookCtrl.getBook);

// 请求一共有多少页的方法
router.post("/getPage.do", bookCtrl.getPage);

// 点击第几页就显示第几页的数据
router.post("/getPageData.do", bookCtrl.getPageData);

/* // 查询单个
router.post("/queryOneBook.do", bookCtrl.queryOneBook);

// 查询所有
router.post("/queryBook.do", bookCtrl.queryBook);

// 新增数据
router.post("/addBook.do", bookCtrl.addBook);

// 确定修改
router.post("/updateBook.do", bookCtrl.updateBook);

// 多条件搜素
router.post("/searchBook.do", bookCtrl.searchBook);

// 删除指定行的信息
router.post("/delBookPost.do", bookCtrl.delBookPost); */

// 获取所有数据的方法
// router.get("/ajaxGetData.do", bookCtrl.getBookData);





module.exports = router;