// 接口 interface
type fnType = (a: number, b: number) => void;

interface IPerson {
  name: string;
  age: number;
  fn1: fnType;
}

const lisi: IPerson = {
  name: 'lisi',
  age: 19,
  fn1: (a: number, b: number) => {
    // ...
  },
};

export {};
