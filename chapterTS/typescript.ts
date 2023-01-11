class Person {
  //定义静态类属性，不用实例化对象可直接访问
  static age: number = 18;
  name: string = "Bob";
}
// output 18
// console.log(Person.age);
class Animal{
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`${this.name} is animanl barking`);
  }
}
class Dog extends Animal{
  gender:string;
  constructor(name:string, age:number, gender:string){
    // 如果子类写了构造函数，在子类构造函数中必须对父类的constructor进行继承
    super(name,age); //调用父类的构造函数
    this.gender=gender;
  }
  sayHello() {
    // super表示当前的弗雷
    super.sayHello()
  }
}

const dog = new Dog("bob",12, "female");
console.log(dog);
dog.sayHello();

class Cat extends Animal{
  sayHello() {
    console.log(`meow meow meow`);
  }
}

const cat = new Cat("anna",2);
console.log(cat);
cat.sayHello()