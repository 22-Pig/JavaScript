var arr = [89, 56, 100, 21, 87, 45, 1, 888];    // 待排序数组
console.log('待排序数组：' + arr);
// 按照从小到大的顺序排列
for (var i = 1; i < arr.length; ++i) {          // 遍历无序数组下标
    for (var j = i; j > 0; --j) {                 // 遍历并比较 一个无序数组元素与所有有序数组元素
        if (arr[j - 1] > arr[j]) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        }
    }
}
// 输出从小到大排序后的数组
console.log('排序后的数组：' + arr);