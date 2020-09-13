// 类型注解
var Count;
Count = 123;
// 类型推断
var countInference = 123;
// 潜规则
// 如果TS能够自动分析变量类型,我们就什么也不需要做了
// 如果TS无法分析变量类型的话,我们就需要使用类型注解
// 不用写类型注解的例子
var one = 1;
var two = 2;
var three = one + two;
// console.log(three);
// 用写类型注解的例子
function getTotal(one, two) {
    return one + two;
}
var total = getTotal(1, 2);
console.log(total);
