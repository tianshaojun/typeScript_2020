//初级程序员写法
// function getServe(status: number){
//     if (status === 0) {
//         return 'message';
//     } else if(status === 1) {
//         return 'SPA';
//     } else if(status === 2) {
//         return 'dabaojian';
//     }
// }

// const result = getServe(0);
// console.log(`我要去${result}`);


//中级程序员写法
// const Status = {
//     MESSAGE: 0,
//     SPA: 1,
//     DABAOJIAN: 2,
// }

// function getServe(status: any){
//     if (status === Status.MESSAGE) {
//         return 'message';
//     } else if(status === Status.SPA) {
//         return 'SPA';
//     } else if(status === Status.DABAOJIAN) {
//         return 'dabaojian';
//     }
// }

// const result = getServe(Status.SPA);
// console.log(`我要去${result}`);


//高级程序员写法
enum Status {
    MESSAGE = 1,
    SPA,
    DABAOJIAN,
}

function getServe(status: any){
    if (status === Status.MESSAGE) {
        return 'message';
    } else if(status === Status.SPA) {
        return 'SPA';
    } else if(status === Status.DABAOJIAN) {
        return 'dabaojian';
    }
}

const result = getServe(Status.SPA);
// const result = getServe(1);
console.log(`我要去${result}`);

//枚举类型的对应值
console.log(Status.MESSAGE);
console.log(Status.SPA);
console.log(Status.DABAOJIAN);

//枚举通过下标反查
console.log(Status.MESSAGE, Status[1]);




