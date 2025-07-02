// class B and C are heavily depending on A.
class A {
  name: string;
  // if I use parameters to pass name in class A, I will have to change all of them
  constructor(name: string) {
    this.name = name;
  }
}

// class B {
//   a: string;
//   constructor() {
//     this.a = new A().name;
//   }
// }

// class C {
//   a: string;
//   constructor() {
//     this.a = new A().name;
//   }
// }

// Optimize codes and explain why we need dependency injection (DI)
class D {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class E {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Container {
  module: any;
  constructor() {
    this.module = {};
  }

  provider(key: string, module: any) {
    this.module[key] = module;
  }

  get(key: string) {
    return this.module[key];
  }
}

const mo = new Container();

// source code implementation of Dependency Inject @Injectable
mo.provider('a', new D('hahaha'));
mo.provider('c', new E('gegege'));

class F {
  a: any;
  c: any;
  constructor(mo: Container) {
    this.a = mo.get('a');
    this.c = mo.get('c');
  }
}

const test1 = new F(mo);
console.log(test1.a);
