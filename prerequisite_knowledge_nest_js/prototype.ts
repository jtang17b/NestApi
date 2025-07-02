class Test {
  name: string;
  address: string;
  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

const objTest = new Test('a', 'b');

console.log(Object.getPrototypeOf(objTest) === Test.prototype);
