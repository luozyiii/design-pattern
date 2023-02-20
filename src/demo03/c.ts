type fnType = () => void;

/* Product1 类的产品接口 */
interface IProduct1 {
  doSomething: fnType;
}
class Product1A implements IProduct1 {
  doSomething() {
    console.log('Product1A');
    // ...
  }
}
class Product1B implements IProduct1 {
  doSomething() {
    console.log('Product1B');
    // ...
  }
}

/* Product2 类的产品接口 */
interface IProduct2 {
  doSomething: fnType;
}

class Product2A implements IProduct2 {
  doSomething() {
    console.log('Product2A');
    // ...
  }
}
class Product2B implements IProduct2 {
  doSomething() {
    console.log('Product2B');
    // ...
  }
}

/* 工厂接口 */
interface AbstractFactory {
  createProduct1(): IProduct1;
  createProduct2(): IProduct2;
}

/* A 工厂 */
class FactoryA implements AbstractFactory {
  createProduct1() {
    return new Product1A();
  }
  createProduct2() {
    return new Product2A();
  }
}

/* B 工厂 */
class FactoryB implements AbstractFactory {
  createProduct1() {
    return new Product1B();
  }
  createProduct2() {
    return new Product2B();
  }
}

// 使用
const clientA = new FactoryA().createProduct1();
clientA.doSomething();
const clientB = new FactoryB().createProduct2();
clientB.doSomething();

export {};
