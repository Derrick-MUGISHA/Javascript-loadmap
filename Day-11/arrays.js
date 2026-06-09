


// you can have an array that contains multiple data types:

const mixedArray = [
  "Hello",
  42,
  true,
//   { name: "Alice" },
//   [1, 2, 3],
];

 const length = mixedArray.length;

// console.log(mixedArray);
// console.log(length);





// creating an array 

const fruits = ["apple", "banana", "cherry"];

const mixed = ["text", 123, false, { key: "value" }, [1, 2, 3]];

const newArray = new Array("a", "b", "c");
const emptyArray = new Array(5);


// you have a word called "hello" create an array that contains each letter as an element

const createArray = Array.from("hello");
const range = Array.from({ length: 4 }, (_, i) => i * 2);


// console.log(mixed.at(3)); //few cases 



// how to add and remove the data 

mixed.push("End"); // add to the end
mixed.pop(); // remove from the end
mixed.unshift("Start"); // add to the beginning
mixed.shift(); // remove from the beginning



// how to add the content in the between an array 

const letters = ["a", "b", "c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// letters.splice(2, 2, "x", "y"); // at index 2, remove 0 elements, add "x" and "y"

const sliced = letters.slice(0, 5   ); // from index 1 to 3 (not inclusive) create a new array with those elements




// Iteration Methods


// these is on a forEach loop that will print the index and value of each element in the nums array
const nums = [1, 2, 3, 4, 5, 200];

nums.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

// this is a map method that will create a new array with the squares of the numbers in the nums array

const squares = nums.map(num => num * 11);

const evenNumbers = nums.filter(people => people % 2 === 0);


const products = [
  { name: "Pen", stock: 0 },
  { name: "Book", stock: 5 },
];

const stockStatus = products.filter(product => product.stock > 0)


// reduce method 

 const total = nums.reduce((acc, num) => acc + num, 0); // sum of all numbers in the nums array



//  find method

const found = nums.find(num => num > 3);
const findIndexOf = nums.findIndex(num => num > 3);
const sum = nums.some(num => num > 100); // true if at least one element is greater than 4
const every = nums.every(num => num > 300); // true if all elements are greater than 0
const includes = nums.includes(3); // true if the nums array contains the number 3
console.log(includes);




