// class Person {
//     // public name: string;
//     // constructor(name: string) {
//     //     this.name = name;
//     // }

//     //简写
//     constructor(public name: string) {}
// }

// const person = new Person('jsPang');
// console.log(person.name);


//类继承中的构造器写法
// class Person{
//     constructor(public name:string){}
// }

// class Teacher extends Person {
//     constructor(public age: number) {
//         super('jspang');
//     }
// }

// const teacher = new Teacher(18);
// console.log(teacher.age);
// console.log(teacher.name);


//父类没有构造函数，子类也要用super()进行调用
class Person{

}

class Teacher extends Person {
    constructor(public age: number) {
        super();
    }
}

const teacher = new Teacher(18);
console.log(teacher.age);
