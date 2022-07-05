"use strict";
// tipos: string, boolean, number, ...
let x = 10;
x = 14;
console.log(x);
// inferencia x annotation
let y = 20;
// y = "teste"
let z = 12;
// tipos básicos
let firstName = "Marcos";
let age = 30;
const isAdmin = true;
// String != strging
console.log(typeof firstName);
console.log(firstName);
// Object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
// push adiciona na array
myNumbers.push(5);
console.log(myNumbers);
// tuplas -> tuple
let myTuple;
myTuple = [5, "teste", ["aa", "bb"]];
// myTuple = [true, false, true]
console.log(myTuple);
const user = {
    name: "MKarcos Vinicius",
    age: 55,
};
console.log(user);
console.log(user.name);
