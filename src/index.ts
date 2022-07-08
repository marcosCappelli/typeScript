// tipos: string, boolean, number, ...
let x: number = 10;

x = 14

console.log(x);

// inferencia x annotation
let y = 20;
// y = "teste"

let z : number = 12;

// tipos básicos
let firstName: string = "Marcos";
let age: number = 30;
const isAdmin: boolean = true;

// String != strging

console.log(typeof firstName);
console.log(firstName);

// Object
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());

// push adiciona na array
myNumbers.push(5);

console.log(myNumbers);

// tuplas -> tuple
let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["aa", "bb"]];
// myTuple = [true, false, true]

console.log(myTuple)

const user: { name: string; age: number } = {
    name: "MKarcos Vinicius",
    age: 55,
};
console.log(user);
console.log(user.name);
// não consigo acrescentar nada 
// user.job = "Programador"

// any -> valor que aceita qualquer tipo de dados 
let a:any = 0;

a = "teste";
a = true;
a = [];

// union type
let id: string | number  = "100";

id = 200;
 // id = true;
 // id = [];

 // type alias

 type myIdType = number | string;
 
 const userId: myIdType = 10;
 const productId: myIdType = "0000";
 const shirId: myIdType = 124;

 // enum
 // exemplo de uso: tamanho de roupas (Size: Médio - Size: Pequeno)

 enum Size { 
    p = "pequeno",
    m = "médio",
    g = "grande",
 }

 const camisa = { 
    name: "Camisa gola v",
    size: Size.g,
 };

 console.log(camisa)

// literal types
let teste: "autenticado" | null;

// teste = "outrovalor"
teste = "autenticado";
teste = null;

// funções
function sum(a: number, b:number) {
    return a + b;
}
console.log(sum(25, 25));
// console.log(sum("12", true))

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHelloTo("Marcos"));

function logger(msg: string): void {
    console.log(msg);
}
logger("teste!!");

function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}

greeting("joaquim");
greeting("Marcos", "Sir")

// interfaces
interface MathFunctionParams {
    n1: number;
    n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}
const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 5,
};
 console.log(multiplyNumbers(someNumbers));

 // narrowing
 // Checagem tipos
 function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
 }

 doSomething(5);
 doSomething(true);

 // generics
 function showArraysItens<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
 }

 const a1 = [1, 2, 3];
 const a2 = ["a", "b", "c"];

 showArraysItens(a1);
 showArraysItens(a2);

 // classes
 class User {
    name;
    role;
    isApproved;

    constructor(name: string, role: String, isApproved: boolean ) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean): void {
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

 // interfaces em classes
 interface Ivehicle {
    brand: string;
    showBrand(): void;
 }

 class Car implements Ivehicle {
    brand;
    wheels;
    color;

    constructor(brand: string, wheels:number, color:string) {
        this.brand = brand;
        this.wheels = wheels;
        this.color = color;
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);
        console.log(`A Quantidade de rodas é: ${this.wheels}`); 
        console.log(`A cor do carro é: ${this.color}`);       
    }
 }
  
 const fusca = new Car("W", 4, "vermelho");

 fusca.showBrand();

 // herança
 class SuperCar extends Car {
    engine;

    constructor(brand:string, wheels:number, color:string, engine:number) {
        super(brand, wheels, color);
        this.engine = engine;
    }
  
 }
  
 const a4 = new SuperCar("Audi", 4, "Branco", 2.0);

console.log(a4);
 a4.showBrand();

 // decorators

 // decorators constructor
 function BaseParameters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
 }

 @BaseParameters()
 class Person {
    name;

    constructor(name: string) {
        this.name = name;
    }
 }

 const sam = new Person("Sam");

 console.log(sam);