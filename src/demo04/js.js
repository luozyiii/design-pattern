// 经典js，使用闭包
function genGetInstance() {
  let instance; // 闭包
  class SingleTon {
    // ...
  }

  return () => {
    if (instance == null) {
      instance = new SingleTon();
    }
    return instance;
  };
}

const getInstance = genGetInstance();

const s1 = getInstance();
const s2 = getInstance();
console.log(s1 === s2); // true
