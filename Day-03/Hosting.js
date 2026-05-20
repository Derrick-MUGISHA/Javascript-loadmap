
// the variable "a" is hoisted to the top of the scope, but its value is not assigned until the line where it is declared. Therefore, when console.log(a) is executed, it will output undefined instead of 10.
console.log(a); // output: undefined
var a = 10;  

// let and const 

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c);
    //    |            // the output should come after the declaration 
const c = 30; // ReferenceError: Cannot access 'c' before initialization
       // |