// 类的基本使用
class Lady {
    content='Hi,帅哥'
    sayHello(){
        return this.content;
    }
}

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
class XiaoJieJie extends Lady {
    sayLove(){
        return 'I love you';
    }
    sayHello(){
        return super.sayHello() + ',你好!';
    }
}


const goddess = new XiaoJieJie();
console.log(goddess.sayHello());
console.log(goddess.sayLove());