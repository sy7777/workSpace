class Person{
    // 默认public外部可随意修改,可以在任意地方访问，包括子类
    // protected只能在当前类和子类访问
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
    getName(){
        return this._name;
    }
    setName(name:string){
        this._name=name;
    }
    // TS方式
    get age(){
        return this._age;
    }
    set age(value:number){
        this._age=value;
    }
}
const per = new Person("Fred", 12)
// 加了private这里报错，不能在类外面修改
// per.age = 30
// 也无法读取里面的属性，所以需要getter setter方法
// console.log(per.name);

console.log(per.getName());
per.setName("Annie");
console.log(per.getName());

console.log(per.age);
per.age = 99;
console.log(per.age);




