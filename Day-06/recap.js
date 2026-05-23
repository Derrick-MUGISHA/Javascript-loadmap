// //  student grading system 

// // grad A 90-100, grad b 80-89, grad c 70-79, grad d 60-69, grad f 0-59

// let score2 = 30;

// if (score2 >= 90) {
//     console.log("Grade: A");
// } else if (score2 >= 80) {
//     console.log("Grade: B");
// } else if (score2 >= 70) {
//     console.log("Grade: C");
// } else if (score2 >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }



// // switch statement

// let day = "2"; //initial value or the input value

// switch (day) {
//     case "monday":
//         console.log("The Theme is black");
//         break;
    
//     case "tuesday":
//         console.log("The theme is Blue");
//         break;

//     case "wednesday":
//         console.log("The Theme is Green");
//         break;

//     case "thursday":
//         console.log("The Theme is Yellow");
//         break;

//     case "friday":
//         console.log("The Theme is Red");
//         break;

//     case "saturday":
//         console.log("The Theme is Orange");
//         break;

//     case "sunday":
//         console.log("The Theme is Purple");
//         break;

//     default:
//         console.log("Invalid day");
//         break;

// }



// // calculator with switch statement 

// let num1 = 10;
// let num2 = 20;
// let operator = "/";


// switch (operator) {
//     case "+":
//         console.log(num1 + num2);
//         break;

//     case "-":
//         console.log(num1 - num2);
//         break;

//     case "*":
//         console.log(num1 * num2);
//         break;

//     case "/":
//         console.log(num1 / num2);
//         break;

//     default:
//         console.log("Invalid operator");
//         break;
// }


// // Atm machine 

// // the action : withdraw, deposit, check balance, pay bills
// let balance = 1000;
// let paymentAmount = 5000;
// let depositAmount = 500;
// let withdrawalAmount = 500;
// let action = "pay bills";

// switch (action) {
//     case "withdraw":
//         if (withdrawalAmount < balance && withdrawalAmount > 0) {
//             balance -= withdrawalAmount; // balance = balance - withdrawalAmount;
//             console.log("Withdrawal successful. Remaining balance: " + balance);
//         } else {
//             console.log("Insufficient balance or invalid amount");
//         }
//         break;
//     case "deposit":
//         if (depositAmount > 0) {
//             balance += depositAmount;
//             console.log("Deposit successful. New balance: " + balance);
//         } else {
//             console.log("Invalid amount");
//         }
//         break;
//     case "check balance":
//         console.log("Your current balance is: " + balance);
//         break;
//     case "pay bills":
//         if (paymentAmount < balance && paymentAmount > 0) {
//             balance -= paymentAmount;
//             console.log("Payment successful. Remaining balance: " + balance);
//         } else {
//             console.log("Insufficient balance or invalid amount");
//         }
//         break;

//     default:
//         console.log("The action you enter is not valid");
//         break;

// }


// restaurant menu 


// menu 
// 1 Drink : water, soda, juice, milk,
// 2 fast food : pizza, burger, fries, salad, sandwich 
// 3 coffee : espresso, latte, cappuccino, mocha, flat white

// order is greater than 50 discount 


// let order = "Drink";
// let price = 0;

// switch (order) {
//     case "Drink":
//         console.log("1. water, 2. soda, 3. juice, 4. milk");
//         console.log("Enter the number of the drink you want");
//         console.log("Enter the quantity")
//         console.log("Total price is: ")
//         break 
//     case "fast food":
//         console.log("1. pizza, 2. burger, 3. fries, 4. salad, 5. sandwich");
//         console.log("Enter the number of the food you want");
//         console.log("Enter the quantity")
//         console.log("Total price is: ")
//         break 
//     case "coffee":
//         console.log("1. espresso, 2. latte, 3. cappuccino, 4. mocha, 5. flat white");
//         console.log("Enter the number of the coffee you want");
//         console.log("Enter the quantity")
//         console.log("Total price is: ")
//         break 
//     default:
//         console.log("Invalid order");
//         break;
// }




const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log ("Welcome to RedHat restaurant")

console.log("Categories: 1. Drink | 2. fast food | 3. coffee");

rl.question('Enter category name (Drink, fast food, or coffee): ', (order) => {
    let items = [];
    let pricePerItem = 0;

    switch (order) {
        case "Drink":
            items = ["water", "soda", "juice", "milk"];
            pricePerItem = 500;
            break;
        case "fast food":
            items = ["pizza", "burger", "fries", "salad", "sandwich"];
            pricePerItem = 10;
            break;
        case "coffee":
            items = ["espresso", "latte", "cappuccino", "mocha", "flat white"];
            pricePerItem = 5;
            break;
        default:
            console.log("Invalid order");
            rl.close();
            return;
    }

    console.log("\nItems available:", items.map((item, i) => `${i + 1}. ${item}`).join(', '));

    rl.question('Enter the number of the item you want: ', (itemNum) => {
        rl.question('Enter the quantity: ', (quantity) => {
            let total = pricePerItem * parseInt(quantity);
            
            // Order is greater than 50 discount
            if (total > 50) {
                total = total * 0.90; // 10% discount
                console.log("Discount applied! 10% off.");
            }

            console.log(`Total price is: $${total.toFixed(2)}`);
            rl.close();
        });
    });
});
