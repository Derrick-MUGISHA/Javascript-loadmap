let a = 5;
let b = 10;
let password = "123456";
let age = 19;
let c = 2;
let d = "2";

// greater than >

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is not greater than b");
}


// less than <

if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is not less than b");
}

// greater than or equal to >=

if (password.length >= 6) {
    console.log("Password is valid");
} else {
    console.log("Password is invalid");
}
 
// less than or equal to <=

if (age <= 18) {
    console.log("You are not allowed to Vote");
} else {
    console.log("You are allowed to Vote");
}

// strict equality ===

// You are going to check if 2 is qual to "2"

if (c === d) {
    console.log("c is equal to d");
} else {
    console.log("c is not equal to d");
}


// loose equality ==

if (c == d) {
    console.log("c is equal to d");
} else {
    console.log("c is not equal to d");
}

// And operator && 
// on the And operator both conditions must be true for the whole expression to be true

 if (age >= 18 && password.length >= 6) {
    console.log("You are allowed to Vote and your password is valid");
 } else {
    console.log("You are not allowed to Vote or your password is invalid");
 }


// Or operator ||
// on the Or operator at least one condition must be true for the whole expression to be true 

if (age >= 18 || password.length >= 6) {
    console.log("You are allowed to Vote or your password is valid");
} else {
    console.log("You are not allowed to Vote or your password is invalid");
}

// Not operator !  

if (!(age <= 18)) {
    console.log("You are allowed to Vote");
} else {
    console.log("You are not allowed to Vote");
}

 
let max = 50;

if (!(max >= 50)) {  // (!max >= !50) recommended to (!(max >= 50))
     console.log("You failed the exam");   // the condition is true 
} else {
    console.log("You passed the exam");   // the condition is  false 
}

// 

let e = 5
let f = 10

console.log(e); 

// =, +=, -=, *=, /=, %=  


let sum = e + f;

e += 1; // e = e + 1
// e -= f; // e = e - f
// e *= f; // e = e * f
// e /= f; // e = e / f
// e %= f; // e = e % f
console.log(e);  