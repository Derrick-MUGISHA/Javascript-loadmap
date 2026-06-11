//  creating an object with properties and a method

const user = {
  name: "Ada",
  age: 36,
  isAdmin: true,
  greet() {                   
    return `Hi, I'm ${this.name}`;
  }
};

const object1 = {
  name: "Object 1",
  value: 42,
};

const object2 = {
  name: "Object 2",
  value: 100,
};

const key = "name";
const name = { [key]: "Alice" };


// adding , accessing and deleting properties in an object


const car = { brand: "Toyota", year: 2020 };
const bus = { 
    brand: "Mercedes", year: 2018,
    brand: "BMW", year: 2022,
    brand: "Audi", year: 2021            
        };

// the dot notation method 

let brand = car.brand;
let year = car.year;


//  the bracket notation method or Key method 

bus["brand"] = "BMW";
bus.engine = "V6";
delete bus.year; 



const scores = { math: 90, science: 85, art: 95 };

const keys = Object.keys(scores);  // to return only the keys
const values = Object.values(scores);  // to return only the values
const entries = Object.entries(scores);  // [[key, value], [key, value]]



// to loop through an object We use the for--in loop

for (const key in scores) {
  // console.log(key, scores[key]); these reads the key and the value
}

for (const [subject, marks] of Object.entries(scores)) {  // these in
  //console.log(`${subject}: ${marks}`); // these reads the value in the array
}
// console.log(entries);




// user profile object

const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "johndoe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  },
  hobbies: ["reading", "hiking", "cooking"],
  friends: [
    { name: "Jane Doe", age: 25 },
    { name: "Bob Smith", age: 28 }
  ],
  isActive: true
}


// here we use what we call Destructuring to extract values from an object and assign them to variables


//const { firstName, lastName }= profile  // destructuring

const { name:firstName, country = "Rw" } = profile


// spread operator
const user2 = { name: [{firstName: "John", lastName: "Doe"}], age: 30, email: "johndoe@example.com" };
const admin = { ...user2, isAdmin: true };


const marge = Object.assign({}, user2, { isAdmin: true });


const original = { nested: { value: { a: 1, b: 2} } };
const clone = structuredClone(original);


console.log(clone);
// console.log(`What are we doing today ${firstName} ${lastName}`);




