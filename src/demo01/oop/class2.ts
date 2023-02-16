// 封装
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
  // private:girlfirend: string = 'xx';
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
    // console.log(this.girlfirend); // 报错
  }
}

const zhangsan = new People('zhangsan', 18);
zhangsan.eat();

export {};

// 可见性修饰符
// public - 所有都可以访问
// protected - 当前类，或者子类可访问，外部不可访问
// private - 只能在当前类内部访问
