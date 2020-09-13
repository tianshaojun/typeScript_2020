// 基础静态类型
var count2 = 918;
var myName = 'jspang';
// null undefined boolean void symbol
// 对象类型
// 1 对象类型
var xiaoJieJie = {
    name: '大脚',
    age: 18
};
// console.log(xiaoJieJie.name);
// 2 数组
var xiaoJieJies = ['谢大脚', '刘英', '小红'];
// 3 类类型
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
;
var dajiao = new Person();
// 4 函数类型
var jianXiaoJieJie = function () { return '大脚'; };
