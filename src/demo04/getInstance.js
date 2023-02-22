// es6 commonjs 模块化 语法

// src/demo04/getInstance.js
let instance; // 闭包
class SingleTon {}

export default () => {
  if (instance == null) {
    instance = new SingleTon();
  }
  return instance;
};
// 注意：外部只能 import 函数导入
