// 接口
interface Gril {
    name: string;
    age: number;
    bust: number;
    waistline ?: number;
    [propName: string]: any;  //允许加入任意值
    say(): string;  //接口里的方法
}

const gril = {
    name: '大脚',
    age: 18,
    bust: 89,
    waistline: 21,
    sex: '女',
    say(){
        return '欢迎光临，红浪漫洗浴!!';
    },
    teach(){
        return '我是一个老师';
    }
}

// 接口和类的约束
class Xiaojiejie implements Gril {
    name='刘英'
    age=18
    bust=90
    say(){
        return '欢迎光临，红浪漫洗浴!!';
    }
}

// 接口间的继承
interface Teacher extends Gril {
    teach(): string;
}

const screenResume = (gril: Gril) => {
    gril.age<24 && gril.bust>=90 && console.log(gril.name+'进入面试');
    gril.age>24 || gril.bust<90 && console.log(gril.name+'你被淘汰');
}

const getResume = (gril: Teacher) => {   //Gril
    console.log(gril.name+'年龄是:'+gril.age);
    console.log(gril.name+'体重是:'+gril.bust);
    gril.waistline && console.log(gril.name+'腰围是:'+gril.waistline);
    gril.sex && console.log(gril.name+'性别是:'+gril.sex);
    console.log(gril.teach());
}

screenResume(gril);
getResume(gril);



