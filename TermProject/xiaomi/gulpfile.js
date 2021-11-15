// 引入插件
const gulp = require("gulp");
const scss = require("gulp-scss");
const rename = require("gulp-rename");
const minifyCSS = require("gulp-minify-css");

const connect = require("gulp-connect");

// 把.scss文件 => css文件 => 压缩 => min.css
// index.scss => index.css => index.min.css(重命名)
gulp.task("scss", function () {
    return gulp.src("stylesheet/index.scss")
        // 对文件进行编译
        .pipe(scss())
        // 存放在dist目录下
        .pipe(gulp.dest("dist/css"))
        // 压缩
        .pipe(minifyCSS())
        // 重命名
        .pipe(rename("index.min.css"))
        // 存放在dist目录下
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
})

// 批量处理scss
gulp.task("scssAll", function () {
    return gulp.src("stylesheet/*.scss")
        .pipe(scss())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
})

// 处理.js
gulp.task("scripts", function () {
    // 排除!gulpfile.js
    return gulp.src(["*.js", "!gulpfile.js"])
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
})

// 处理.html
gulp.task("copy-html", function () {
    return gulp.src("*.html")
        // .pipe(gulp.dest("dist/html"))
        .pipe(gulp.dest("dist/"))
        .pipe(connect.reload());
})

// 处理数据
gulp.task("data", function () {
    // 排除!package.json
    return gulp.src(["*.json", "!package.json"])
        .pipe(gulp.dest("dist/data"))
        .pipe(connect.reload());
})

// 处理图片
gulp.task("img", function () {
    return gulp.src(["img/**/*"])
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload());
})

//设置一个专门拷贝php数据的任务
/* gulp.task("php", function () {
    return gulp.src("*.php")
        .pipe(gulp.dest("dist/php"))
        .pipe(connect.reload());
}) */

// 一次性处理多个任务
/* gulp.task("build", gulp.parallel("scss", "scssAll", "scripts", "copy-html", "data", "img", function () {
    console.log("项目建立成功");
})); */
gulp.task("build", ["scss", "scssAll", "scripts", "copy-html", "data", "img"], function () {
    console.log("项目建立成功");
});

// 建立监听
gulp.task("watch", function () {
    gulp.watch("stylesheet/index.scss", ["scss"]);
    gulp.watch(["stylesheet/*.scss"], ['scssAll']);
    gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
    gulp.watch("*.html", ['copy-html']);
    gulp.watch(["*.json", "!package.json"], ['data']);
    gulp.watch(["img/**/*"]);
    // gulp.watch("*.php", ['php']);
})

// 启动临时服务器
gulp.task("server", function () {
    connect.server({
        root: "dist",
        port: 8887,
        // 实时刷新
        livereload: true
    })
})

// 启动一个默认任务  直接使用gulp运行
gulp.task("default", ['server', 'watch']);
// gulp.task("default", gulp.series("server", "watch"));