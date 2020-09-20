class XiaoJieJie {
    constructor (private _age:number){}
    get age(){
        return this._age - 10;
    }
    set age(age:number) {
        this._age = age + 3;
    }
}

const dajiao = new XiaoJieJie(28);
dajiao.age=25;
console.log(dajiao.age);


//类中的static
// class Gril {
//     sayLove(){
//         return 'I Love you';
//     }
// }

// const gril = new Gril;
// console.log(gril.sayLove());

class Gril {
    static sayLove(){
        return 'I Love you';
    }
}
console.log(Gril.sayLove());

