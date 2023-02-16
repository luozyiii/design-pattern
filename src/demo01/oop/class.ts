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

export {};
