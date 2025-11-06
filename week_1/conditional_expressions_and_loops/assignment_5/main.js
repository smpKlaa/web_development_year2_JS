"use strict";

const form = document.getElementById("form");
const numberInput = document.getElementById("numberInput");
const resultSpan = document.getElementById("resultSpan");

// Add event listener for form submit.
form.addEventListener("submit", func);

// Function for calculating sum of numbers and displaying it to DOM.
function func(event) {
  // Stop page reload.
  event.preventDefault();

  // Check if input value is empty.
  if (numberInput.value === "" || numberInput.value <= 0) {
    alert("Invalid input.");
    return;
  }

  const n = parseInt(numberInput.value);

  let sum = 0;

  // Calculate sum.
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  // Display results.
  resultSpan.textContent = sum;
}
