class Subject {
  private state = 0;
  private observers: Observer[] = [];

  getState(): number {
    return this.state;
  }

  setState(newState: number) {
    this.state = newState;
    this.notify();
  }

  // 添加观察者
  attach(observer: Observer) {
    this.observers.push(observer);
  }

  // 通知
  private notify() {
    this.observers.forEach((observer) => {
      observer.update(this.state);
    });
  }
}

// 观察者
class Observer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  update(state: number) {
    console.log(`${this.name} update, state is ${state}`);
  }
}

const sub = new Subject();
const observerA = new Observer('A');
sub.attach(observerA);
const observerB = new Observer('B');
sub.attach(observerB);
sub.setState(1);

export {};
