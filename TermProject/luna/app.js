// 1、导入项目依赖
const express = require("express");
const bodyParser = require("body-parser");

// 导入koa模块
// const Koa = require('koa');
// const bodyParser = require('koa-bodyparser');
// const koaStatic = require('koa-static');
const logger = require("morgan");
const favicon = require("serve-favicon");


const login = require("./router/loginRouter");

// 创建koa的实例app
// const app = new Koa();

const app = express();

// 打印日志
app.use(logger("dev"));

// 解析post方法
// app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false })); // 配置post的body模块
app.use(bodyParser.json()); // 将数据转换为json

// 根据不同功能划分模块使用路由
app.use(login);

// 配置静态资源
app.use(express.static(__dirname + "/static"));
// app.use(koaStatic(__dirname + '/static'));
// 配置网页小icon
app.use(favicon(__dirname + "/static/img/luna.png"));

// 当发生404页面错误的时候返回一个404.html文件
app.use(function (req, resp) {
    resp.status(404);
    // 重定向
    resp.redirect("/page/404.html");
});

app.listen(8080, () => {
    console.log("服务器在8080端口启动中……");
});