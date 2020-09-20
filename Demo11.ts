//public访问属性讲解
// class Person {
//     public name: string;
//     public sayHello() {
//         console.log(this.name + ' say Hello');
//     }
// }

// const person = new Person();
// person.name = 'jspang.com';
// person.sayHello();
// console.log(person.name);


//private访问属性讲解
// class Person {
//     private name: string;
//     public sayHello() {
//         console.log(this.name + ' say Hello');
//     }
// }

// const person = new Person();
// person.name = 'jspang.com';
// person.sayHello();
// console.log(person.name);


//protected访问属性讲解
class Person {
    protected name: string;
    public sayHello(){
        console.log(this.name + 'say Hello');
    }
}

class Teacher extends Person {
    public sayBye() {
        this.name
    }
}



