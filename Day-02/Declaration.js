
//  let is a block-scoped variable declaration. It can be reassigned but not redeclared within the same scope.

let name = "Derrick";
console.log(name);
name = "Derrick Okeke";
console.log(name);



// const is a block-scoped variable declaration that is read-only. It cannot be reassigned or redeclared within the same scope.
const PI = 3.14159;
// PI = 3.14;
console.log(PI);

// var is a function-scoped variable declaration. It can be reassigned and redeclared within the same scope, but it is generally not recommended to use var due to its quirks and potential for bugs.
var  age = 30;
console.log("My age is " + age);
age = 21;
console.log("My age is on second stage " + age);

var age = "thirty";
console.log("My age is on third stage " + age);

const apiURL = "https://api.example.com/data";
let userScore = 85;