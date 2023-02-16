# 前期准备工作：了解 TS、面向对象、UML 类图。

## 主要内容

- 介绍 Typescript（TS）类型
- 介绍面向对象的概念和应用
- 介绍 UML 类图的关键知识点
- 搭建演示项目

## TS 类型基础入门

### 概述

https://www.tslang.cn/play/index.html

- 是 JavaScript 的超集
- 引入了静态类型
- 最终会编译成 JavaScript

### 基础类型

```ts
// src/demo01/ts/base.ts
// 值类型
const b = true;
const n = 100;
const str = 'hi';
const s = Symbol();

// 或
let x: number | string | boolean = 100;
x = '100';

// 任意类型，慎用
const y: any = [];

// 数组
const arr: string[] = ['hi', 'ni', 'hao'];
const numArr: Array<number> = [1, 2, 3];

// 元组
const arr1: Array<number | boolean | string> = ['hi', 1, true];

// 对象: object 不常用
const obj: object = { x: 1 };

// 函数: Function 不常用
const fn: Function = () => {};

// 类型断言
let n1 = 100;
n1 = 200;
n1 = 'hi'; // 报错

export {};
```

### 函数

```ts
// src/demo01/ts/fn.ts
// 函数: 参数，返回值
function fn1(a: number, b: number): number {
  return a + b;
}

function fn2(a: number, b: number): void {
  // return a + b;
}

export {};
```

### 自定义类型

```ts
// src/demo01/ts/type.ts
// 自定义类型
type infoType = string | number;
let info1: infoType = 100;
info1 = '100';

type fnType = (a: number, b: number) => void;
const fn1: fnType = (a: number, b: number) => {};

export {};
```

### 接口 interface

```ts
// src/demo01/ts/interface.ts
// 接口 interface
type fnType = (a: number, b: number) => void;

interface IPerson {
  name: string;
  age: number;
  fn1: fnType;
}

const lisi: IPerson = {
  name: 'lisi',
  age: 19,
  fn1: (a: number, b: number) => {},
};

export {};
```

### 类 class

```ts
// src/demo01/ts/class.ts
// 类 class
type fnType = (a: number, b: number) => void;

// interface 用于 object
interface IPerson {
  name: string;
  age: number;
  fn1: fnType;
}

// interfaceinterface 用于 class
class Person implements IPerson {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  fn1(a: number, b: number) {
    // ...
  }
}

export {};
```

## 面向对象（OOP）和 UML 类图

### 什么是面向对象

- 将抽象的编程概念，想象成一个对象，更好理解

#### 重要概念

- 类 class，即模版
- 对象即实例

```ts
// src/demo01/oop/class.ts
type fnType = () => void;

interface IPeople {
  name: string;
  age: number;
  eat: fnType;
  speak: fnType;
}

// 类，即模版
class People implements IPeople {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} eat something`);
  }
  speak() {
    console.log(`My name is ${this.name}, age ${this.age}`);
  }
}
// 对象即实例
const zhangsan = new People('zhangsan', 18);
zhangsan.eat();

export {};
```

#### 三要素：继承、封装、多态

##### 继承：抽离公共代码，实现代码复用

- People 是父类，公共的，不仅仅服务于 Student
- 继承可将公共方法抽离出来，提高复用，减少冗余

```ts
// src/demo01/oop/class.ts
// 继承：子类继承父类
class Student extends People {
  school: string;
  constructor(name: string, age: number, school: string) {
    super(name, age);
    this.school = school;
  }
  study() {
    console.log(`${this.name} study`);
  }
}

// 使用
const xiaoming = new Student('xiaoming', 10, '希望小学');
xiaoming.study();
console.log(xiaoming.school);
xiaoming.eat();
```

##### 封装：高内聚，低耦合

- 减少耦合，不该外露的不外露
- 利于数据、接口的权限管理
- ES6 目前不支持，一般认为 \_ 开头的属性是 private

```ts
// src/demo01/oop/class2.ts
type fnType = () => void;

interface IPeople {
  name: string;
  age: number;
  eat: fnType;
  speak: fnType;
}

class People implements IPeople {
  name: string;
  age: number;
  protected weight = 100;
  private:girlfirend: string = 'xx';
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} eat something`);
  }
  speak() {
    console.log(`My name is ${this.name}, age ${this.age}`);
  }
}

class Student extends People {
  school: string;
  constructor(name: string, age: number, school: string) {
    super(name, age);
    this.school = school;
  }
  study() {
    console.log(`${this.name} study`);
    console.log(this.girlfirend); // 报错
  }
}

const zhangsan = new People('zhangsan', 18);
zhangsan.eat();

export {};


// 可见性修饰符
// public - 所有都可以访问
// protected - 当前类，或者子类可访问，外部不可访问
// private - 只能在当前类内部访问
```

##### 多态：更好的拓展性

- 同一接口（eat 方法）不同实现 （重写）
- 子类对父类的修改（重写、重载），能满足自己的拓展性
- 保持子类的开放性和灵活性

```ts
// src/demo01/oop/class3.ts
// 多态
type fnType = () => void;

interface IPerson {
  name: string;
  eat: fnType;
}

class Person implements IPerson {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eat something`);
  }
}
// 重写
class A extends Person {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log(`${this.name} eat A`);
  }
}

class B extends Person {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log(`${this.name} eat B`);
  }
}

// 重载
interface IStyleInfo {
  [key: string]: string;
}

class JQuery {
  css(key: string, value: string): void;
  css(styleInfo: IStyleInfo): void;
  css(keyOrInfo: string | IStyleInfo, value?: string): void {
    if (typeof keyOrInfo === 'string') {
      // key value
    } else {
      // object
    }
  }
}

const j = new JQuery();
j.css('font', '12px');
j.css({ font: '12px' });

export {};
```

#### react vue 组件也是对象

在此，还得提一下函数式组件、函数式编程 hook

#### 面向对象的意义：数据结构化

### UML 类图-统一建模语言

- 三个区域：名称、属性、方法
- 权限描述：+(public)，#(protected)，-(private)

![类](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/427bd83e0437406ebedcc9f1504487cd~tplv-k3u1fbpfcp-watermark.image?)

#### 类之间的关系

- 实现：实现接口（虚线 + 空心箭头 = 对接口的实现）
- 泛化：继承父类（实线 + 空心箭头 = 实例的实现）
- 关联：表示引用，A 是 B 的属性 （实线 + 普通箭头 = 关联关系）

![类之间的关系](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca7aef89f920467f9b22d877bf6a2f37~tplv-k3u1fbpfcp-watermark.image?)

```ts
// src/demo01/oop/class4.ts
// 类之间的关系
interface IPerson {
  name: string;
  age: number;
  sayHi(otherName: string): void;
}

class Person implements IPerson {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi(otherName: string) {
    console.log('Hi, ', otherName);
  }
}
class Student extends Person {
  city: string;
  constructor(name: string, age: number, city: string) {
    super(name, age);
    this.city = city;
  }
  study() {}
}

export {};
```

##### 关联关系的细化

- 聚合-整体包括部分，部分可以脱离整体而单独存在
- 组合-整体包括部分，部分不可以脱离整体
- 依赖-不是属性关系，而是函数参数或返回值

#### 画图工具

- MS Office visio
- [processon](https://www.processon.com/)

## 演示项目初始化

[如何用 vite 搭建一个 react 项目?](https://github.com/luozyiii/code-guide)

[项目地址](https://github.com/luozyiii/design-pattern)
