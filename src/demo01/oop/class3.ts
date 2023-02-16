// 多态
type fnType = () => void;

interface IPerson {
  name: string;
  eat: fnType;
}

class Person implements IPerson {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eat something`);
  }
}
// 重写
class A extends Person {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log(`${this.name} eat A`);
  }
}

class B extends Person {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log(`${this.name} eat B`);
  }
}

// 重载
interface IStyleInfo {
  [key: string]: string;
}

class JQuery {
  css(key: string, value: string): void;
  css(styleInfo: IStyleInfo): void;
  css(keyOrInfo: string | IStyleInfo, value?: string): void {
    if (typeof keyOrInfo === 'string') {
      // key value
    } else {
      // object
    }
  }
}

const j = new JQuery();
j.css('font', '12px');
j.css({ font: '12px' });

export {};
