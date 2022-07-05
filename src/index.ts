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
