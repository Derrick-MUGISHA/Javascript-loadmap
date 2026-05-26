
let number = 10;

// Age verification 


if (number > 5) {
    
    console.log("The number is greater than 5");
}

// temperature check 

let temperature = 30;

if (temperature > 25) {
    console.log("It's a hot day!");
}   


// check a number if its positive or negative 

// if statement only  
let num = -5;

if (num > 0) {
    console.log("The number is positive");
}


// if and else 

if (num > 0) {
    console.log("The number is positive");
} else {
    console.log("The number is negative");
}


// if else if and else 

// grading system

let score = 30;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else if (score >= 50) {
    console.log("Grade: E");
} else {
    console.log("Grade: F");
}

// == the can be use to compare value 
// === the can be use to compare value and type for verification 
// traffic light system 

let light = "green";  // the user input 

if (light === "red") {
   console.log("Stop");
} else if (light === "yellow") {
   console.log("Slow down");
} else if (light === "green") {
   console.log("Go");
}


// Backing system in a nested if statement condition 


let balance = 1000;
let withdrawalAmount = 500;


if (withdrawalAmount <= balance) {
    if (withdrawalAmount > 0) {
        balance -= withdrawalAmount;
        console.log("Withdrawal successful. Remaining balance: " + balance);
    } else {
        console.log("Invalid withdrawal amount.");
    }
} else {
    console.log("Insufficient balance.");
}


// Login system

let username = "admin";
let password = "password123";







// Switch statement 

// we working on things that are fixed

 
let day = "Tuesday";


// day === case 

switch (day) {
    case "Monday":
        console.log("start of the week");
        // break; 

    case "Friday":
        console.log("Weekend is near");
        // break;

    case "sunday":
        console.log("rest day");
        break;

    default:
        console.log("It's a regular day");
}




//  else if 

if (condition) {
//  when condition is true do this
}


if (condition) {
//  when condition is true do this 
}else {
// when condition is false do this
}




if (condition) {
// when condition is true do this
} else if (condition) {
// when condition is true do this
} else {
// when condition is false do this
} 










// switch statement 