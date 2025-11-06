"use strict";

// Create an array called fruits and initialize it with the following elements: “apple”, “banana”, “orange”, “ grape”, “kiwi”.
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Display the contents of the fruits array in the console.
console.log("Fruints: ", fruits);

// Calculate and display the length of the fruits array.
console.log("Length of fruits: ", fruits.length);

// Access and display the element at index 2 in the fruits array in the console.
console.log("Element at index 2: ", fruits[2]);

// Access and display the last element in the fruits array using the length property in the console.
console.log("Last element of fruits: ", fruits[fruits.length - 1]);

// Create an empty array called vegetables.
let vegetables = [];

// Prompt the user to enter three vegetables one by one, and add each entered vegetable to the vegetables array using the push() method.
for (let i = 0; i < 3; i++) {
  const response = prompt("Enter vegetable.");
  vegetables.push(response);
}

// Display the contents of the vegetables array in the console.
console.log("Vegetables: ", vegetables);

// Calculate and display the length of the vegetables array.
console.log("Lenght of vegetables: ", vegetables.length);
