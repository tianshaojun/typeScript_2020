// 简单类型定义
function getTotal2(one, two) {
    return one + two;
}
var total2 = getTotal2(1, 2);
// 函数无返回值时定义方法
function sayHello() {
    console.log("hello world");
    //    return '1';
}
// never返回值类型
function errorFunction() {
    throw new Error();
    console.log('Hello World');
}
function forNever() {
    while (true) { }
    ;
    console.log('Hello JSPang');
}
// 函数参数为对象(解构)时
function add(_a) {
    var one = _a.one, two = _a.two;
    return one + two;
}
var three = add({ one: 1, two: 2 });
function getNumber(_a) {
    var one = _a.one;
    return one;
}
var one = getNumber({ one: 1 });
