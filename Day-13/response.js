

const res = await fetch('https://dummyjson.com/products');



// the Body of the response reading method

//const body = await res.json(); // these returns into object with key and value notation 
//const text = await res.text();  // returns into a row text or plain text 
//const blob = await res.blob(); // returns into binary data (images and text)
//const arrayBuffer = await res.arrayBuffer(); // returns into array buffer
//const formData = await res.formData(); // returns into form data
const clone = res.clone();

console.log(clone);