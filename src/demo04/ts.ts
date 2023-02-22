// 使用 ts 特性演示
class Singleton {
  // private - 外部无法初始化
  private constructor() {
    // ...
  }

  // static 属性
  private static instance: Singleton | null;

  // static 方法
  static getInstance(): Singleton {
    if (Singleton.instance == null) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

// 创建实例
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1 === s2); // true

// 报错 private
// const s3 = new Singleton();
// Singleton.instance

export {};
