// global scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
let globalVariable = "I am a global variable";


// function Scope: Variables declared within a function are in the function scope and can only be accessed within that function.

function myFunction() {
    let functionVariable = "I am a function variable";
}


console.log(functionVariable); // This will throw an error because functionVariable is not defined in the global scope


// block scope: Variables declared with let or const within a block (e.g., inside an if statement or a loop) are in the block scope and can only be accessed within that block.

if (true) {
    let blockVariable = "I am a block variable";
}

console.log(blockVariable); // This will throw an error because blockVariable is not defined in the global scope
































console.log(globalVariable); // Output: I am a global variable