class Foo {
  // 实例/对象 属性
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  // 静态属性
  static flag = '二次元';
  static getFlag() {
    // this === Foo
    return this.flag;
  }
}

const f1 = new Foo('张三');
f1.name; // 张三
f1.getName(); // 张三

Foo.flag; // 二次元
Foo.getFlag();

export {};
