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
