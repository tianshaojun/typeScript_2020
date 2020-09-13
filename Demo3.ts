// 基础静态类型
let count2: number = 918;
let myName: string = 'jspang';
// null undefined boolean void symbol


// 对象类型
// 1 对象类型
let xiaoJieJie: {
    name: string,
    age: number
} = {
    name: '大脚',
    age: 18
}
// console.log(xiaoJieJie.name);

// 2 数组
let xiaoJieJies: String[] = ['谢大脚','刘英','小红'];

// 3 类类型
class Person{};
let dajiao: Person = new Person();

// 4 函数类型
let jianXiaoJieJie: ()=> string = ()=> {return '大脚'};
