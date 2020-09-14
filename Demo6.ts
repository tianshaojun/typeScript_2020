// 一般数组类型的定义
const numberArr: number[] = [1,2,3];
const stringArr: String[] = ['a','b','c'];
const undefinedArr: undefined[] = [undefined,undefined];
const arr: (number|string)[] = [1,'string',2];


// 数组中对象类型的定义
// const xiaoxiaojies: {name: string,age: number}[] = [
//     {name:'刘英',age:18},
//     {name:'谢大脚',age:28}
// ]

// 类型别名(type alias)
// type Lady = {name: string, age: number};
// const xiaoxiaojies: Lady[] = [
//     {name:'刘英',age:18},
//     {name:'谢大脚',age:28}
// ]

// 用类来限制数组的类型
class Madam {
    name: string;
    age: number
}
const xiaojiejies: Madam[] = [
    {name:'刘英',age:18},
    {name:'谢大脚',age:28}
]

