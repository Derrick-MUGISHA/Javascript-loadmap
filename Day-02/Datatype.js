//  we are starting with Primitive data types in JavaScript

// 1 String 
let name = "John Doe";
let name2 = 'Jane Doe';
let name3 = "John Doe's";


// 2 Numbers 

let balance = 120000.54;
let balance2 = -5000;
let balance3 = 100;

let y = 23e5;
let z = 23e-5;

// in Numbers we have some special values

let a = BigInt(1234567890123456789012345678901234567890);


// 3 Boolean
let isActive = true;
let isAdmin = false;

// 4 Undefined
let x;
let y = undefined;

// 5 Null

let z = null; 

// 6 Symbol
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // false, each symbol is unique

//  non-primitive data types are objects

arrays 

let arr = [1, 2 ,3 ,4 ,5]

objects

let person = {
    name: "John Doe",
    age: 30,
    isAdmin: false
}

// functions

function greet(name) {
    return `Hello, ${name}!`;
}





