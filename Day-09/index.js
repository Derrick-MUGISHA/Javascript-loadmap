//  we have many ways of dom manipulation in js these include

// 1 get an element by class
const title = document.getElementsByClassName("card-title");

// console.log(title);

title[0].style.color = "red";
title[0].innerHTML = "this is a new title In dom manipulation";


// 2 get an element by id

const title2 = document.getElementById("title");
console.log(title2);

// 3 get an element by tag

const title3 = document.getElementsByTagName("h1");
console.log(title3);


//  DOM Traversal

const el = document.querySelector("section");

el.parentNode.style.backgroundColor = "green";

console.log(el);
// 4 get an element by name



// 5 get an element by attribute


// 6 get an element by query selector


// 7 get an element by query selector all


// 8 get an element by get elements by class name