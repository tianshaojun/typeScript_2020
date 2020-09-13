// 简单类型定义
function getTotal2(one: number, two: number): number {
    return one + two;
}

const total2 = getTotal2(1,2);


// 函数无返回值时定义方法
function sayHello(): void{
   console.log("hello world");
//    return '1';
}


// never返回值类型
function errorFunction(): never {
    throw new Error();
    console.log('Hello World');
}

function forNever(): never{
    while(true){};
    console.log('Hello JSPang');
}


// 函数参数为对象(解构)时
function add({one, two}: {one: number, two: number}): number {
    return one + two;
}

const three = add({one:1,two:2});

function getNumber({one}: {one: number}): number {
    return one;
}

const one = getNumber({one:1});


