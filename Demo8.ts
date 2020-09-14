// const screenResume = (name:string,age:number,bust:number) => {
//     age<24 && bust>=90 && console.log(name+'进入面试');
//     age>24 || bust<90 && console.log(name+'你被淘汰');
// }
// screenResume('大脚',18,94);

// const getResume = (name:string,age:number,bust:number) => {
//     console.log(name+'年龄是:'+age);
//     console.log(name+'体重是:'+bust);
// }
// getResume('大脚',18,94);


// 接口
interface Gril {
    name: string;
    age: number;
    bust: number;
    waistline ?: number;
}

const gril = {
    name: '大脚',
    age: 18,
    bust: 89,
    waistline: 21,
}

const screenResume = (gril: Gril) => {
    gril.age<24 && gril.bust>=90 && console.log(gril.name+'进入面试');
    gril.age>24 || gril.bust<90 && console.log(gril.name+'你被淘汰');
}

const getResume = (gril: Gril) => {
    console.log(gril.name+'年龄是:'+gril.age);
    console.log(gril.name+'体重是:'+gril.bust);
    gril.waistline && console.log(gril.name+'腰围是:'+gril.waistline);
}

screenResume(gril);
getResume(gril);



