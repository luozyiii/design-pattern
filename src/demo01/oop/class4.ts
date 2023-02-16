// 类与类的关系
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
  study() {
    // ...
  }
}

export {};
