var oct=032;
var dec=26;
var hex=0x1a;
var fnum1=7.26;
var fnum2=-6.34;
var fnum3=3.14E6;
var fnum4=8.95E-3;
var fnum5=NaN;
var fnum6=NaN;
console.log(fnum5==fnum6);
console.log(typeof(fnum6));
console.log(oct);
console.log(dec);
console.log(hex);
console.log(fnum4);

var data = null;	// 待判断的数据
var type = 'Null';	// 数据类型，开始字母要大写，如Boolean等
// 检测数据类型的表达式，若是指定的type型，则返回true，否则返回false
console.log(Object.prototype.toString.call(data) == '[object ' + type + ']');
