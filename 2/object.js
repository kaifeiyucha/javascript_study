function A(){
    // 在原型链中动态给对象附加方法
    this.sayhehe = function () {
        console.log("how do you explain Bibao?")
    }
}


A.prototype.sayHello = function () {
    console.log("hello js");
}

// static 方法定义
A.sayHi = function(){
    console.log("Hello, I'm a static function");
}

// 普通方法调用
var a = new A();
a.sayHello();

// 静态方法调用
A.sayHi();



// 普通方法能继承，static方法不能继承
function B() {

}
B.prototype = new A();

var b = new B();
b.sayHello();

b.sayhehe();