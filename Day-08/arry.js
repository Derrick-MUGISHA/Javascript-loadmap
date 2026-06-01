
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//  array methods on Add and remove elements

// 1. push() - adds an element to the end of an array

// arr.push(11);

// 2. pop() - extracts and element in end of an array 

// arr.pop();
delete arr[1]; // these is not recommended
arr.splice(1, 4, "banana", "apple");

console.log(arr);

// 3. shift() - removes the first element in an array

arr.shift();


// 4. unshift() - adds an element to the beginning of an array

arr.unshift(0);