

// Functions in JavaScript are a way to encapsulate a block of code that performs a specific task or set of tasks. They are a way to break down a complex problem into smaller, more manageable components.

//  in a function is made up of parament and arguments 


function greet(greeting) {
    return  greeting + " " + "Derrick";
}

console.log(greet('Hello'));


let a = 2

let b = 10 

let c = a + b

console.log(c);


function add(a, b) {
    return a + b;
}

console.log(add(50, 70));
console.log(add(10, 40));


// an object  {key: "value"};
// an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


sayHi();

function sayHi() {
    console.log("Hi");
}

 // function recursion is when a function calls itself


 const name = function () {
    console.log("Derrick");
}


function test() {}
test.custom = "Hello these are test";

console.log(test.custom);

// these are types of parameter in javascript 


// Default parameter 
function greet(name = "Guest") {
  return name;
}

console.log(greet());




//  rest parameters

//  in rest operators these are used to pass and array as a parameter to a function 

function sum(...numbers) {
    let sumNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumNumbers += numbers[i];
    }
    return sumNumbers
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// Destructuring these is a method of extracting values form arrays or objects and assigning them to variables

// these is destructuring in an array 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [d, e, f] = arr;

console.log(d);
console.log(e);
console.log(f);

// in an object 

const user = {
    name1: "Derrick",
    age: 20,
    gender: "Male",
    occupation: "Software Developer",
    country: "Kenya",
    city: "Nairobi",
    state: "Nairobi",
    street: "Kenyatta Avenue",
    zipCode: "00100",
    phoneNumber: "0712345678",
    email: "BbGZ3@example.com",
}


user.name 


console.log(user.phoneNumber);

function createUser({name1, email}) {
    console.log(name1);
    console.log(email);
};

createUser(user);






let x = 10 


function int() {
    console.log(x);
}

int();


const user2 = {
    name: "Derrick",
    getName () {
        return this.name
    }
}


console.log(user2.getName());


// const test = () => {

// }  // these is an arrow function 


// Closures 


function outer() {
    let counter = 0;

    return function inner() {
        counter++;
        return counter
    }
}

const increment = outer();

console.log(increment());





// types of function with the syntax 

//  arrow function 

const get = () => {
    return "Hello World";
}


// function Declaration 

function get () {
    return "Hello World";
}

// function expression 

const get = function () {
    return "Hello World";
}

// Anonymous function

const anonymous = function () {

}


// Asynchronous function 

const get = async () => {
    return "Hello World";
}