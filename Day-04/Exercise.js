let age = 30;

if (!(age >= 18)) {
    console.log("You are not allowed to Vote");
} else {
    console.log("You are allowed to Vote");
}



// Baker's Math

let flourWeight = 500;

let sugarWeight = 200;

let totalWeight = flourWeight + sugarWeight;
let remainder = totalWeight / 3;
let grams = remainder % 3;

console.log(remainder + " grams");   
console.log(grams + " grams");   

// Backing App 

let initialBalance = 1000;

initialBalance += 500; // Deposit
initialBalance -= 150;
initialBalance *= 2;
console.log("Balance after deposit: " + initialBalance);

// Vip Lounge 

let userAge = 13;

if (userAge === 21) {
    console.log("Welcome to the VIP Lounge!");
} else {
    console.log("Sorry, you do not meet the age requirement for the VIP Lounge.");
}

if (userAge >= 18) {
    console.log("You are allowed to enter the VIP Lounge.");
} else {
    console.log("You are not allowed to enter the VIP Lounge.");
}

if (userAge !== 13){
     console.log("You are not allowed to enter the VIP Lounge.");
} else {
    console.log("You are allowed to enter the VIP Lounge.");
}




let cartTotal= 500;
let isPremiumMember = false;
let hasDiscountCode = false;
let isFraudulent = true;


if (cartTotal > 100 && (isPremiumMember || hasDiscountCode) && !isFraudulent) {
    console.log("You are eligible for a free shipping");
} else {
    console.log("You are not eligible for a discount.");
}
