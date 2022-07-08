"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 14;
console.log(x);
let y = 20;
let z = 12;
let firstName = "Marcos";
let age = 30;
const isAdmin = true;
console.log(typeof firstName);
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ["aa", "bb"]];
console.log(myTuple);
const user = {
    name: "MKarcos Vinicius",
    age: 55,
};
console.log(user);
console.log(user.name);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "100";
id = 200;
const userId = 10;
const productId = "0000";
const shirId = 124;
var Size;
(function (Size) {
    Size["p"] = "pequeno";
    Size["m"] = "m\u00E9dio";
    Size["g"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola v",
    size: Size.g,
};
console.log(camisa);
let teste;
teste = "autenticado";
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(25, 25));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Marcos"));
function logger(msg) {
    console.log(msg);
}
logger("teste!!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("joaquim");
greeting("Marcos", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 5,
};
console.log(multiplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
function showArraysItens(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItens(a1);
showArraysItens(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Nível do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);
class Car {
    brand;
    wheels;
    color;
    constructor(brand, wheels, color) {
        this.brand = brand;
        this.wheels = wheels;
        this.color = color;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
        console.log(`A Quantidade de rodas é: ${this.wheels}`);
        console.log(`A cor do carro é: ${this.color}`);
    }
}
const fusca = new Car("W", 4, "vermelho");
fusca.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, color, engine) {
        super(brand, wheels, color);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, "Branco", 2.0);
console.log(a4);
a4.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
