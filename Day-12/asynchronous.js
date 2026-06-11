// console.log("1");
 
// setTimeout(() => console.log("2 - timeout"), 10000); 
 
// Promise.resolve().then(() => console.log("3 - promise"));


// function fetchData(callback) {
//   setTimeout(() => {
//     callback(null); // (error, data) convention
//   }, 1000);
// }
//  // callback 
// fetchData((err, data) => {
//   if (err) return console.error(err);
//   console.log("Got:", data);
// });
 
// Problem: nesting callbacks creates "callback hell"

setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
      setTimeout(() => {
          console.log("Go")
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);



