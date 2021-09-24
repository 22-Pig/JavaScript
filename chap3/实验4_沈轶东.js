var arr = [10, 2, 5, 27, 98, 31];
console.log('待排序数组：' + arr);
for (var i = 1; i < arr.length; ++i) {          // 控制需要比较的轮数
    for (var j = 0; j < arr.length - i; ++j) {    // 控制参与比较的元素
        if (arr[j] > arr[j + 1]) {                  // 比较相邻的两个元素
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}
console.log('排序后的数组：' + arr);