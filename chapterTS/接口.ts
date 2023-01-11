// 多个重名的Interface可以合并 type不能合并
// 接口只能定义结构，不考虑实际值
interface myInter {
  name: string;
  satHello(): void;
}

class MyClass implements myInter {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  satHello() {
    console.log("Hello Everyone");
  }
}
// 泛型T可自定义K M A 
function fn<T>(a: T): T {
  return a;
}
