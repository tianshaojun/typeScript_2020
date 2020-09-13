var gril = {
    name: '大脚',
    age: 18,
    bust: 89,
    waistline: 21,
    sex: '女'
};
var screenResume = function (gril) {
    gril.age < 24 && gril.bust >= 90 && console.log(gril.name + '进入面试');
    gril.age > 24 || gril.bust < 90 && console.log(gril.name + '你被淘汰');
};
var getResume = function (gril) {
    console.log(gril.name + '年龄是:' + gril.age);
    console.log(gril.name + '体重是:' + gril.bust);
    gril.waistline && console.log(gril.name + '腰围是:' + gril.waistline);
    gril.sex && console.log(gril.name + '性别是:' + gril.sex);
};
screenResume(gril);
getResume(gril);
