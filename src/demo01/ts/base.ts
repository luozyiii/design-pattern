// 值类型
const b = true;
const n = 100;
const str = 'hi';
const s = Symbol();

// 或
let x: number | string | boolean = 100;
x = '100';

// 任意类型，慎用
const y: any = [];

// 数组
const arr: string[] = ['hi', 'ni', 'hao'];
const numArr: Array<number> = [1, 2, 3];

// 元组
const arr1: Array<number | boolean | string> = ['hi', 1, true];

// 对象: object 不常用
const obj: object = { x: 1 };

// 函数: Function 不常用
const fn: Function = () => {
  // ...
};

// 类型断言
let n1 = 100;
n1 = 200;
// n1 = 'hi'; // 报错

export {};
