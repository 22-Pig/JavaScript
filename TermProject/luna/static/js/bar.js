
// 伸拉列表

// 实现思路：

var spans = document.querySelectorAll(".tree span");

for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        // console.log(this);
        // 查找要修改的元素 span 自己
        // 修改，删除或添加 class -> open
        // 判断自己身上是不是有 open，如果有，删除!
        // this ->指向触发事件的元素本身
        if (this.className == "open") {
            // 如果有，删除!
            this.className = "";
        } else {
            // 如果没有，则添加 ，删除其他已经打开的！
            //找到打开（open属性的li）
            var openSpan = document.querySelector(".tree .open")
            if (openSpan !== null) {
                // 如果集合不为空，删除他们的 open 属性
                openSpan.className = "";
            }
            // 给自己设置 open 属性
            this.className = "open";
        }


    }
}