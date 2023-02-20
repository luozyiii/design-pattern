type fnType = () => void;

interface IProduct {
  doSomething: fnType;
}

/* 具体产品实现 */
class ProductA implements IProduct {
  doSomething() {
    console.log('ProductA');
    // ...
  }
}
class ProductB implements IProduct {
  doSomething() {
    console.log('ProductB');
    // ...
  }
}

/* 工厂接口 */
interface AbstractFactory {
  createProduct: () => IProduct;
}

/* A 工厂 */
class FactoryA implements AbstractFactory {
  createProduct() {
    return new ProductA();
  }
}

/* B 工厂 */
class FactoryB implements AbstractFactory {
  createProduct() {
    return new ProductB();
  }
}

// 使用
const clientA = new FactoryA().createProduct();
clientA.doSomething();
const clientB = new FactoryB().createProduct();
clientB.doSomething();

export {};
