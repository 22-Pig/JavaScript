// ($(function () {
var count = 99;
var t = $('#cartNum');/*  数量显示框*/
$('#max').click(function () {
    console.log('加加');
    if (t.val() < count) {/* 数量最大不能超过商品库存量 */
        t.val(parseInt(t.val()) + 1);
    } else {
        t.val(count.val());
    }
})
$('#min').click(function () {
    console.log('减减');
    if (t.val() <= 1) {	/*数量最少为1  */
        t.val(1);
    } else {
        t.val(parseInt(t.val()) - 1);
    }
})
// }));















