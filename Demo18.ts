//联合类型
interface Waiter {
    anjiao: boolean;
    say: () => {}
}

interface Teacher {
    anjiao: boolean;
    skill: () => {}
}

function judgeWho(animal: Waiter | Teacher) {}


//类型保护-类型断言
function judgeWhoOne(animal: Waiter | Teacher) {
    if (animal.anjiao) {
        (animal as Teacher).skill();
    }else{
        (animal as Waiter).say();
    }
}


//类型保护-in语法
function judgeWhoTwo(animal: Waiter | Teacher) {
    if ("skill" in animal) {
        animal.skill();
    } else {
        animal.say();
    }
}


//类型保护-typeof语法
function add(first: string | number, second: string | number) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`;
    }
    return first + second;
}


//类型保护-instanceof语法
class NumberObj {
    count: number;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}

