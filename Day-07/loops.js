
// the loops are the repetition of the same code multiple times

// we have the many types of loops these loop type are based on the condition 
// 1. for loop 
// 2. while loop 
// 3. do....while loop 



// 1 the for loop  is made out of the three main part 

// A in a for loop is initialization 
// b in a for loop we have the condition 
// c in a for loop we have the afterthought(increamentation)

// here is the syntax of the for loop

// for (initialization; condition; afterthought(increamentation) ) {
//     // the code to be executed is set at these point 
// }

// i need to count form 1 up to 10 

// we have what we call increamentation and decrement

// += y = y + 1
// -= y = y - 1

// ++ y +1
// _ _ y -1

// for (let i = 1; i <= 10; i++) {
// console.log(i);
// }


// let z = 12;

// // increment(z); by 1
// z++;

// // decrement(z); by 1
// z--;

// console.log(z)


// let y = 12;
// //  y += 12;  \
// y = y + 12;

// console.log(y)


// const fruits = ["apple", "banana", "mango", "orange", "grapes", "pineapple", "watermelon", "kiwi", "strawberry", "blueberry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// show the even numbers from 1 t0 20

// for (let i = 1; i <= 20; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// while loop and how it works 

// we are going to count from 1 to 10


// for (let p = 5; p >= 0; p--){
//     console.log(p);
// }


// to display even number from 1 to 20 


// for (let i = 1; i <= 20; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// while loop 

let roll = 0;
while (roll !== 6) {
    roll = Math.floor(Math.random()* 6) + 1;
    console.log("You rolled a " + roll);
}  
console.log("Congrats you rolled a 6");


let counter = 1;

while (counter <= 5) {
    console.log(counter);
    counter++;
}

let pin= true;

while (pin !== true) {
    console.log ("Incorrect pin");
    break;
}
console.log ("You entered Your correct Pin")

// while (true) {
//     console.log("Hello world");
// }
    

let pin1 =123456;
while (pin1 !== 123456){
    console.log("Please enter your correct Pin");
}
console.log("Correct Pin ");


// Do... while loop 
  

let i = 5

do {
    
    console.log("i is: " + i);
    i++;

} while (i < 3);


// we are going to rewrite the rolling dice game using do while loop 

let roll2 =0;

do {
    roll2= Math.floor(Math.random() * 6) + 1;
    console.log("you rolled a " + roll2);
} 

while (roll2 !== 6);
console.log ( "congrats you rolled a 6");



// break in a loop 
const password = false; 
while (password !== true) {
    console.log("Incorrect password");
    break;
}
console.log("You entered your correct password");


// continue in a loop 

for (let n = 1; n <= 5; n++) {
    if (n === 3) continue;
    console.log(n);
}


// these is an example of an infinity loop 

let w = 1;

while (w <= 5) {
  console.log(i);
  break;
}



const arr = ["banana", "apple", "mango", "orange", "grapes", "pineapple", "watermelon", "kiwi", "strawberry", "blueberry"];

for (let x = 0; x < arr.length; x++) {
    console.log(arr[x]);
}



// given an array of numbers that is 
// numbers = [1, 2, 3, 4, 5, 6, 7, 80, 39, 90, 81, 12, 14, 16, 35, 86, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// 1. log the even numbers (done)
// 2. log the odd numbers (done)
// 3. log the numbers that are divisible by 3  ( done)
// 4. multiply all the numbers by 2 and log the result (done)
// 5. find the largest number in the array and log it (done)
// 6. find the smallest number in the array and log it (done)


// Correction of the code




//  the game correction 


let guessNumber;

let randomNumber = Math.floor(Math.random() * 10) + 1;


while (guessNumber !== randomNumber) {
    guessNumber = parseInt(prompt("Guess a number between 1 and 10"));
    if (guessNumber < randomNumber) {
        
    }

    console.log("Guess a number between 1 and 10");
    break;
}


console.log(`You guessed the number ${randomNumber}`);


add(20, 40);