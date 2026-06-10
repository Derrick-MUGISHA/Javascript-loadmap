


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
const nums = [1, 200, 3, 4, 500,7, 12, 5, 20, 8, 9, 10];

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
]

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
//console.log(includes);




// sorting and reordering in an array 

//console.log([1,10,2].sort()); // this will sort the numbers as strings, resulting in [1, 10, 2]

const sortedNums = nums.sort((a, b) => a - b); // these is the sorting of the elements in the ascending order 
const biggest = nums.sort((a, b) => b - a); // this is the sorting of the elements in the descending order

const sortedPeople = people.sort((a, b) => b.age - a.age); // this is the sorting of the people array based on the age property in ascending order


// how to reverse an array 

const Numbers = [1, 2, 3, 4, 5];

const reversed = Numbers.reverse(); // this will reverse the order of the elements in the nums array



// the spreed operator

const a = [1, 2, 3];
const nested = [4, 5, 6, [7, 8, 9]];

const copy = [...nested]; 

const b = [4, 5, 6];

const combined = [...a, ...b]; // we take a copy of the elements in the a and b arrays and combine them into a new array called combined
const copyOfA = [...a]; // this creates a new array that is a copy of the a array, so if we modify copyOfA it will not affect the original a array

const combinedAB = a.concat(b); // this is another way to combine two arrays, it does not modify the original arrays but returns a new array that is the combination of the two arrays


// Destructuring an array

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, second] = nums2;

const nestedArray = [1, [2, 3], [4, [5]]];


console.log(nestedArray.flat());
console.log(nestedArray.flat(2));

