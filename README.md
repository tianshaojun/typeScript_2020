# typeScript_2020

### 1.Demo1.ts

环境测试

### 2.Demo2.ts

自定义静态类型

### 3.Demo3.ts

+ 基础静态类型
+ 对象类型
   + 一般对象类型
   + 数组
   + 类类型
   + 函数类型
 
 ### 4.Demo4.ts
 
 + 类型注解
 + 类型推断
 
 ### 5.Demo5.ts
 
 + 简单类型定义
 + 函数无返回值时定义方法
 + never返回值类型
 + 函数参数为对象(解构)时
 
 ### 6.Demo6.ts
 
 + 一般数组类型的定义
 + 数组中对象类型的定义
 + 类型别名(type alias)
 + 用类来限制数组的类型
 
 ### 7.Demo7.ts
 
 元组
 
 ### 8.Demo8.ts
 
 接口
 
 ### 9.Demo9.ts
 
+ 接口和类的约束
+ 接口间的继承

### 10.Demo10.ts

+ 类的基本使用
+ 类的继承
+ 类的重写
+ super关键字

### 11.Demo11.ts

+ 类的访问类型
  + public访问属性讲解---public从英文字面的解释就是公共的或者说是公众的，在程序里的意思就是允许在类的内部和外部被调用
  + private访问属性讲解---private 访问属性的意思是，只允许在类的内部被调用，外部不允许调用
  + protected访问属性讲解---protected 允许在类内及继承的子类中使用
  
### 12.Demo12.ts

类的构造函数

### 13.Demo13.ts

类的Getter、Setter和static使用

### 14.Demo14.ts

+ 只读属性
+ 抽象类

### 15.tsconfig.json

+ "removeComments":true   编译时不显示注释，也就是编译出来的js文件不显示注释内容
+ include
  "include":["demo.ts"]   只编译demo.ts文件
+ exclude
  "exclude":["demo.ts"]   demo.ts文件除外，其他的都进行编译
+ files
  "files":["demo.ts"]     只编译demo.ts文件
+ "strict":true  代表编译和书写规范，要按照TypeScript最严格的规范来写
+ noImplicitAny   允许你的注解类型any不用特意声明，设置为false，不会报错;设置为true,就算值是any类型，你也要进行类型注解
+ "strictNullChecks":false   不强制检查null类型
+ "rootDir":"./src"   源文件目录
+ "outDir":"./build"  编译后的文件目录
+ "target":'es5'   编译es6语法到es5语法
+ "allowJs":true   允许js文件被编译
+ "sourceMap":true  生成sourceMap文件
+ "noUnusedLocals":true   不允许编译没有使用的变量
+ "noUnusedParameters:true"  不允许编译没有使用的方法

### 18.Demo18.ts

+ 联合类型
+ 类型保护
  + 类型断言
  + in语法
  + typeof语法
  + instanceof语法(instanceof 只能用在类上)
 
 ### 19.Demo19.ts
 
 enum枚举类型
 
 ### 20.Demo20.ts
 
 函数泛型
 
 ### 21.Demo21.ts
 
 类中泛型
 
 ### 22-23-24.TsWeb
 
 + Namespace 命名空间
 + TypeScript使用import语法
 
 ### 25-26.TSTest
 
 + 用parcel打包TypeScript代码
 + 在TypeScript中使用jQuery
 
 
 
 
 
 
 

 
 
 



 






 
 
 
 
 
 





