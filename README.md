# TypeScript

## 安装 TypeScript

TypeScript 官网地址：https://www.typescriptlang.org/zh/

使用 nvm 来管理 node 版本：https://github.com/nvm-sh/nvm

安装 TypeScript:

```sh
npm install -g typescript
```

使用 tsc 全局命令

```shell
// 查看 tsc 版本
tsc -v
// 编译 ts 文件
tsc fileName.ts
// ts-node
ts-node fileName.ts
```

## 原始数据类型

TypeScript 文档地址：

[Basic-Types]: https://www.typescriptlang.org/docs/handbook/basic-types.html

Javascript 类型分类：

原始数据类型 - primitive values:

- Boolean
- Null
- Undefined
- Number
- Biglnt
- String
- Symbol

```js
let isDone: boolean = false

// 接下来来到 number，注意 es6 还支持2进制和8进制，让我们来感受下

let age: number = 10
let binaryNumber: number = 0b1111

// 之后是字符串，注意es6新增的模版字符串也是没有问题的
let firstName: string = 'viking'
let message: string = `Hello, ${firstName}, age is ${age}`

// 还有就是两个奇葩兄弟两，undefined 和 null
let u: undefined = undefined
let n: null = null

// 注意 undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let num: number = undefined
```

any 类型

```js
let notSure: any = 4
notSure = 'maybe it is a string'
notSure = 'boolean'
// 在任意值上访问任何属性都是允许的：
notSure.myName
// 也允许调用任何方法：
notSure.getName()
```

## Array & Tuple

```js
//最简单的方法是使用「类型 + 方括号」来表示数组：
let arrOfNumbers: number[] = [1, 2, 3, 4]
//数组的项中不允许出现其他的类型：
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
arrOfNumbers.push(3)
arrOfNumbers.push('abc')

// 元祖的表示和数组非常类似，只不过它将类型写在了里面 这就对每一项起到了限定的作用
let user: [string, number] = ['viking', 20]
//但是当我们写少一项 就会报错 同样写多一项也会有问题
user = ['molly', 20, true]
```

## interface 接口

Duck Typing 概念：

> 如果某个东西长的像鸭子，像鸭子一样游泳，像鸭子一样嘎嘎叫，那它就可以被看成是一只鸭子。

```js
// 我们定义了一个接口 Person
interface Person {
  name: string;
  age: number;
}
// 接着定义了一个变量 viking，它的类型是 Person。这样，我们就约束了 viking 的形状必须和接口 Person 一致。
let viking: Person ={
  name: 'Person',
  age: 20
}

//有时我们希望不要完全匹配一个形状，那么可以用可选属性：
interface Person {
    name: string;
    age?: number;
}
let viking: Person = {
    name: 'Person'
}

//接下来还有只读属性，有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性

interface Person {
  readonly id: number;
  name: string;
  age?: number;
}
  
Person.id = 9527
```

## 函数

```js
// 来到我们的第一个例子，约定输入，约定输出
function add(x: number, y: number): number {
  return x + y
}

// 可选参数
function add(x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

// 函数本身的类型
const add2: (x: number, y: number, z?:number) => number = add

// interface 描述函数类型
const sum = (x: number, y: number) => {
  return x + y
}
interface ISum {
  (x: number, y: number): number
}
const sum2: ISum = sum
```

## 类型推论，联合类型 & 类型断言

[类型推论 - type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)

[联合类型 - union types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types)

```js
// 我们只需要用中竖线来分割两个
let numberOrString: number | string 
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
numberOrString.length
numberOrString.toString()
```

[类型断言 - type assertions](https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions)

```js
// 这里我们可以用 as 关键字，告诉typescript 编译器，你没法判断我的代码，但是我本人很清楚，这里我就把它看作是一个 string，你可以给他用 string 的方法。
function getLength(input: string | number): number {
  const str = input as string
  if (str.length) {
    return str.length
  } else {
    const number = input as number
    return number.toString().length
  }
}
```

[类型守卫 - type guard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types)

```js
// typescript 在不同的条件分支里面，智能的缩小了范围，这样我们代码出错的几率就大大的降低了。
function getLength2(input: string | number): number {
  if (typeof input === 'string') {
    return input.length
  } else {
    return input.toString().length
  }
}
```

## Class 类

面向对象编程的三大特点：

- **封装 (Encapsulation)** : 将对数据的操作细节隐藏起来，只暴露给对外的接口。外界调用端不需要知道细节，就能通过对外提供的接口来访问该对象。
- **继承 (Inheritance)** : 子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性。
- **多态 (Polymorphism)** : 由继承面产生了相关的不同类，对同一方法可以有不同的响应。

[类 - Class](https://www.typescriptlang.org/docs/handbook/classes.html)

```js
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}
const snake = new Animal('lily')

// 继承的特性
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const dog = new Dog('xiaobao')
console.log(dog.run())
console.log(dog.bark())

// 这里我们重写构造函数，注意在子类的构造函数中，必须使用 super 调用父类的方法，要不就会报错。
class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'Meow, ' + super.run()
  }
}
const cell = new Cat('cell')
console.log(cell.run())
```

  [类成员的访问修饰符](https://www.typescriptlang.org/docs/handbook/classes.html#public-private-and-protected-modifiers)

- **public** 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
- **private** 修饰的属性或方法是私有的，不能在声明它的类的外部访问
- **protected** 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

