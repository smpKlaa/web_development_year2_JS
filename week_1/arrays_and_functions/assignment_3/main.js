"use strict";

const numbersSpan = document.getElementById("numbersSpan");

// Define an empty array to store the numbers entered by the user.
let numbers = [];

// Use a loop (e.g., while or do...while) to prompt the user for numbers and add them to the array until the user decides to stop.
let s = "";
do {
  s = prompt("Please enter a number (leave blank to stop).");
  numbers.push(parseInt(s));
} while (s !== "");

// Use the for...of loop to iterate over the entered values stored in the array.
for (const num of numbers) {
  // Inside the loop, check if the current number is even using the modulo operator %.
  if (num % 2 == 0) {
    // If the current number is even, display it on the HTML document.
    numbersSpan.textContent += num + " ";
  }
}

// After the loop completes, display a message indicating the end of the program.
alert("Program has ended.");
