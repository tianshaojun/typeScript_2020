//只读属性
class Person {
    public readonly _name:string
    constructor(name:string){
        this._name = name;
    }
}

const person = new Person('jspang');
// person._name = '谢广坤';
console.log(person._name);


//抽象类
abstract class Gril {
   abstract skill()
}

class Waiter extends Gril{
   skill() {
       console.log('大爷，请喝水！');
   }
}

class BaseTeacher extends Gril{
    skill() {
        console.log('大爷，来个泰式按摩吧！');
    }
}

class seniorTeacher extends Gril{
    skill() {
        console.log('大爷，来个SPA全身按摩吧！');
    }
}

