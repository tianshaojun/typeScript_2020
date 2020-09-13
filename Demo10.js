var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类的基本使用
var Lady = /** @class */ (function () {
    function Lady() {
        this.content = 'Hi,帅哥';
    }
    Lady.prototype.sayHello = function () {
        return this.content;
    };
    return Lady;
}());
// const goddess = new Lady();
// console.log(goddess.sayHello());
// 类的继承
// class XiaoJieJie extends Lady {
//     sayLove(){
//        return 'I love you';
//     }
// }
// 类的重写
// class XiaoJieJie extends Lady {
//     sayLove(){
//         return 'I love you';
//     }
//     sayHello(){
//         return 'hi, honey!';
//     }
// }
// super关键字
var XiaoJieJie = /** @class */ (function (_super) {
    __extends(XiaoJieJie, _super);
    function XiaoJieJie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XiaoJieJie.prototype.sayLove = function () {
        return 'I love you';
    };
    XiaoJieJie.prototype.sayHello = function () {
        return _super.prototype.sayHello.call(this) + ',你好!';
    };
    return XiaoJieJie;
}(Lady));
var goddess = new XiaoJieJie();
console.log(goddess.sayHello());
console.log(goddess.sayLove());
