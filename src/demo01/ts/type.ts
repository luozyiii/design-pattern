// 自定义类型
type infoType = string | number;
let info1: infoType = 100;
info1 = '100';

type fnType = (a: number, b: number) => void;
const fn1: fnType = (a: number, b: number) => {
  // ...
};

export {};
