// class SelectGril {
//     constructor(private girls: string[]) {}
//     getGril(index: number): string {
//         return this.girls[index];
//     }
// }

// const selectGril = new SelectGril(['大脚','刘英','晓红']);
// console.log(selectGril.getGril(1));


//初始类的泛型
// class SelectGril<T> {
//     constructor(private girls: T[]) {}
//     getGril(index: number): T {
//         return this.girls[index];
//     }
// }

// // const selectGril = new SelectGril(['大脚','刘英','晓红']);  //泛型中的类型推断
// const selectGril = new SelectGril<string>(['大脚','刘英','晓红']);
// console.log(selectGril.getGril(1));


//泛型中的继承
interface Girl {
    name: string;
}

class SelectGirl<T extends Girl> {
    constructor(private girls: T[]) {}
    getGirl(index: number): string {
        return this.girls[index].name;
    }
}

const selectGril = new SelectGirl([
    {name:"大脚"},
    {name:'刘英'},
    {name:'晓红'},
]);
console.log(selectGril.getGirl(1));