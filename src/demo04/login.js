class LoginForm {
  constructor() {
    this.state = 'hide';
  }
  show() {
    if (this.state === 'show') {
      console.log('已经显示');
    } else {
      this.state = 'show';
      console.log('登录框显示成功');
    }
  }
  hide() {
    if (this.state === 'hide') {
      console.log('已经隐藏');
    } else {
      this.state = 'hide';
      console.log('登录框隐藏成功');
    }
  }
}

LoginForm.getInstance = (function () {
  let instance;
  return function () {
    if (!instance) {
      instance = new LoginForm();
    }
    return instance;
  };
})();

// 测试
let login1 = LoginForm.getInstance();
login1.show();

let login2 = LoginForm.getInstance();
login2.hide();

console.log('login1 === login2:', login1 === login2);
