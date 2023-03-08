class CustomIterator {
  private data: number[];

  constructor() {
    this.data = [100, 20, 30];
  }

  *[Symbol.iterator]() {
    yield* this.data;
  }
}

const iterator = new CustomIterator();
for (const n of iterator) {
  console.log(n);
}

export {};
