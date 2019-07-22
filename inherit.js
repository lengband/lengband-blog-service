/* 继承 */

// 1、原型链式继承
function SuperType() {
    this.colors = ['red', 'blue', 'green']
}

function SubType() {}
// 继承了 SuperType
SubType.prototype = new SuperType()
var instance1 = new SuperType()
instance1.colors.push('black')
console.log(instance1.colors) // 'red', 'blue', 'green', 'black'
var instance2 = new SubType()
console.log(instance2.colors) // 'red', 'blue', 'green', 'black'
/* 以上代码出现的问题了，当 SubType 继承了 SuperType 后，由于 colors 是引用类型，导致
其中一个实例对它操作后，其余实例都会受到影响~~！ */

// 2、借用构造函数 式继承
function SuperType() {
    this.colors = ['red', 'blue', 'green']
}

function SubType() {
    // 继承了 SuperType
    SuperType.call(this)
}
var instance1 = new SuperType()
instance1.colors.push('black')
console.log(instance1.colors) // 'red', 'blue', 'green', 'black'
var instance2 = new SubType()
console.log(instance2.colors) // 'red', 'blue', 'green'
/*  优势：以上代码优雅的解决了引用类型的问题
         并且可以向超类构造函数传递参数
    劣势：方法都在构造函数中定义，因此函数复用就无从谈起了 */

// 3、 组合式继承
// desc：针对构造函数式继承的劣势(问题)出现的继承，有时候也叫伪经典继承
function SuperType(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function () {
    console.log(this.name)
}

function SubType(name, age) {
    // 继承了 SuperType
    SubType.call(this, name)
    this.age = age
}
SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType
SubType.prototype.sayName = function () {
    console.log(this.age)
}
var instance1 = new SuperType('Nicholas', 29)
instance1.colors.push('black')
console.log(instance1.colors) // 'red', 'blue', 'green', 'black'
instance1.sayName() // 'Nicholas'
instance1.sayAge() // 29
var instance2 = new SubType('Greg', 27)
console.log(instance2.colors) // 'red', 'blue', 'green'
instance1.sayName() // 'Greg'
instance1.sayAge() // 27
/* 组合式继承实际上就是讲原型链和借用构造函数的技术组合到一块，发挥二者之长的一种继承模式 */

// 4、原型式继承
/* 诞生由来（目的）：创造者的想法是借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型（
           通俗的话来说就是把传进来的不管你是属性还是方法都放在原型上，并返回一个新实例） */
function object(obj) {
    function F() {}
    F.prototype = obj
    return new F()
}
var person = {
    name: 'Nicholas',
    friends: ['sheliby', 'Count', 'Van']
}
var anotherPerson = object(person)
anotherPerson.name = "Greg"
anotherPerson.friends.push('Rob')
var yetAntherPerson = object(person)
yetAntherPerson.name = "Linda"
yetAntherPerson.friends.push('Barbie')
console.log(person.friends) // 'sheliby', 'Count', 'Van'，'Greg'，'Barbie'
// ES5 通过 Object.create() 方法规范化了原型式继承
var person = {
    name: 'Nicholas',
    friends: ['sheliby', 'Count', 'Van']
}
var anotherPerson = Object.create(person)
anotherPerson.name = "Greg"
anotherPerson.friends.push("Rob")
var yetAntherPerson = Object.create(person)
yetAntherPerson.name = "Linda"
yetAntherPerson.friends.push("Barbie")
console.log(person) // var person = { name: 'Nicholas', friends: ['sheliby', 'Count', 'Van', 'Rob', 'Barbie']}
// 由此可见，原型式继承只是实现了对一个对象的浅复制，注意：这里Obejct.create() 方法还有第二个参数，用法与 Obejct.defineProperties() 方法类似，这里不做赘述

// 5、寄生式继承
// desc: 寄生式继承的思路与寄生构造函数和工厂模式类似，即创建一个仅用来封装继承过程的函数，该函数内部以某种方式来增强对象，最后再像真地是它做了所有的工作一样返回对象
function object(obj) {
    function F() {}
    F.prototype = obj
    return new F()
}

function createAnother(original) {
    var clone = obejct(original)
    clone.sayHi = function () {
        console.log('hi')
    }
    return clone
}
// 缺点： 不能做到函数复用(即每个子类都有父类实例函数的副本，影响性能)而且降低效率，这一点与构造好书模式类似

// 5、寄生式继承
function inhertPrototype(subType, superType) {
    var prototype = Object.create(superType.prototype)
    prototype.constructor = subType
    SubType.prototype = prototype
}
function SuperType(name) {
    this.name = name
    this.colors = ['res', 'blue', 'green']
}
SuperType.prototype.sayName = function () {
    console.log(this.name)
}
function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
}
inhertPrototype(SubType, SuperType) // 关键
SubType.prototype.sayAge = function() {
    console.log(this.age)
}
// 优点：不会初始化两次实例方法/属性，避免的组合继承的缺点
/* 关键：
    1、创建超类型原型的一个副本
    2、创建的副本添加constructor属性从而弥补重写原型而失去的construction属性
    3、讲新创建的副本赋值到原型上
*/