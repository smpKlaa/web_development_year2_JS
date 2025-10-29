"use strict";

const numbersSpan = document.getElementById("numbersSpan");

// Create an empty array called numbers.
let numbers = [];

// Prompt the user to enter five numbers, one by one, and add each entered number to the numbers array using the push() method.
for (let i = 0; i < 5; i++) {
  numbers.push(parseInt(prompt(`Enter the ${i + 1}. number.`)));
}
// Display the contents of the numbers array on the HTML document or in the console.
numbersSpan.textContent += numbers;

// Prompt the user to enter a number and check if the entered number is included in the numbers array using the includes() method.
const n = parseInt(prompt("Enter a number."));

// Display a message indicating whether the entered number is found or not found in the numbers array.
if (numbers.includes(n)) {
  console.log("Numbers includes the given number.");
} else {
  console.log("Numbers does not include the given number.");
}

// Remove the last number from the numbers array using the pop() method.
numbers.pop();

// Display the updated numbers array on the HTML document or in the console.
console.log("Updated numbers: ", numbers);

// Sort the numbers array in ascending numerical order using the sort() method with a custom comparison function.
numbers.sort((a, b) => a - b);

// Display the sorted numbers array on the HTML document or in the console.
console.log("Sorted numbers: ", numbers);
