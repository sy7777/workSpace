(function (){
    /*
    abstract抽象类专门用来被继承
    */ 
    abstract class Animal{
        name: string;
        constructor(name: string) {
          this.name = name;
        }
        // sayHello() {
        //   console.log(`${this.name} is animanl barking`);
        // }

        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello():void;
      }
      class Dog extends Animal{
        sayHello() {
          console.log("wang wang wang");
        }
      }
    //   需要重写抽象类
    //   class Cat extends Animal{

    //   }
      
      const dog = new Dog("bob");
      console.log(dog);
      dog.sayHello();
    
      //报错，抽象类不能创建实例，只能继承
    //   const an = new Animal()
})()