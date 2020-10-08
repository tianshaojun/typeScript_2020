//泛型
// function join(first: string | number, second: string | number) {
//     return `${first}${second}`;
// }
// join('jspang','.com');

function join<JSPang>(first: JSPang, second: JSPang) {
    return `${first}${second}`;
}

// join<string>('jspang','.com');
join<number>(1,2);


//泛型中数组的使用
//第一种写法
function myFun<ANY>(params: ANY[]) {
    return params;
}

myFun<string>(['1','2']);

//第二种写法
function myFunc2<ANY>(params: Array<ANY>) {
    return params;
}

myFunc2<string>(['123','456']);


//多个泛型的定义
function join2<T,P>(first: T, second: P) {
    return `${first}${second}`;
}

join2<number,string>(1,'2');
// join2(1,'2');  //泛型的类型推断

