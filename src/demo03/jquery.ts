declare interface Window {
  $: (seletor: string) => JQuery;
}

class JQuery {
  seletor: string;
  length: number;
  constructor(seletor: string) {
    const domList = Array.prototype.slice.call(document.querySelectorAll(seletor));
    const length = domList.length;
    for (let i = 0; i < length; i++) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this[i] = domList[i];
    }
    this.seletor = seletor;
    this.length = length;
  }
  append(elem: HTMLElement): JQuery {
    console.log('append: ', elem);
    // ...相关操作
    return this;
  }
  addClass(className: string): JQuery {
    console.log('addClass: ', className);
    // ...相关操作
    return this;
  }
  // ...
}

// 不用工厂模式
const $div = new JQuery('div');
const $p = new JQuery('p');

// 用工厂模式
function $(seletor: string) {
  return new JQuery(seletor);
}

const $div1 = $('div');
const $p1 = $('p');

window.$ = $;

// 伪代码，演示jquery
// const jquery = {
//   seletor: 'div',
//   length: 3,
//   0: div1,
//   1: div2,
//   2: div3
// }

export {};
