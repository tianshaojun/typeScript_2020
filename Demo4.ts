// 类型注解
let Count: number;
Count = 123


// 类型推断
let countInference = 123;


// 潜规则
// 如果TS能够自动分析变量类型,我们就什么也不需要做了
// 如果TS无法分析变量类型的话,我们就需要使用类型注解

// 不用写类型注解的例子
const one = 1;
const two = 2;
const three = one + two;
// console.log(three);

// 用写类型注解的例子
function getTotal(one: number, two: number) {
    return one + two;
}
const total = getTotal(1,2);
console.log(total);

// ts也可以推断出对象中属性的类型
const obj = {
    name: '刘英',
    age: 18
}
