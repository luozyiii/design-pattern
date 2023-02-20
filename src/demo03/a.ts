type fnType = () => void;

interface IProduct {
  doSomething: fnType;
}

// 定义类
class ProductA implements IProduct {
  doSomething() {
    console.log('A');
    // ...
  }
}
class ProductB implements IProduct {
  doSomething() {
    console.log('B');
    // ...
  }
}
class ProductC implements IProduct {
  doSomething() {
    console.log('C');
    // ...
  }
}
/* 简单工厂 */
class SimpleFactory {
  createProduct(type: string): IProduct | null {
    let instance: IProduct | null = null;
    switch (type) {
      case 'A':
        instance = new ProductA();
        break;
      case 'B':
        instance = new ProductB();
        break;
      case 'C':
        instance = new ProductC();
        break;
    }
    return instance;
  }
}

// 使用
const client = new SimpleFactory();
(client.createProduct('A') as IProduct).doSomething();
(client.createProduct('B') as IProduct).doSomething();
export {};
