class Car {
  name: string;
  number: string;
  constructor(name: string, number: string) {
    this.name = name;
    this.number = number;
  }
}

class Kuaiche extends Car {
  private price = 1;
  constructor(name: string, number: string) {
    super(name, number);
  }
  getPrice() {
    return this.price;
  }
}

class Zhuanche extends Car {
  private price = 2;
  constructor(name: string, number: string) {
    super(name, number);
  }
  getPrice() {
    return this.price;
  }
}

type CarType = Kuaiche | Zhuanche;

// 行程
class Trip {
  car: CarType;
  constructor(car: CarType) {
    this.car = car;
  }
  start() {
    console.log(`行程开始，车辆型号：${this.car.name},车牌号：${this.car.number}`);
  }
  end() {
    console.log(`行程结束，价格：${this.car.getPrice() * 5}`);
  }
}

const car = new Kuaiche('Toyota', '粤A0001');
const trip = new Trip(car);
trip.start();
trip.end();

export {};
