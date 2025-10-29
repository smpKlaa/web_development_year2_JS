"use strict";

const form = document.getElementById("form");
const x1Input = document.getElementById("x1Input");
const y1Input = document.getElementById("y1Input");
const x2Input = document.getElementById("x2Input");
const y2Input = document.getElementById("y2Input");
const resultSpan = document.getElementById("resultSpan");

// Add event listener for form submit.
form.addEventListener("submit", calculate);

// Function for calculating the distance of the points and displaying results to DOM.
function calculate(event) {
  // Stop page reload.
  event.preventDefault();

  // Check if input value is empty.
  if (
    x1Input.value == "" ||
    y1Input.value == "" ||
    x2Input.value == "" ||
    y2Input.value == ""
  ) {
    alert("Input is empty.");
    return;
  }

  const x1 = parseFloat(x1Input.value);
  const y1 = parseFloat(y1Input.value);
  const x2 = parseFloat(x2Input.value);
  const y2 = parseFloat(y2Input.value);

  // Calculate distance.
  const distance = Math.abs(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));

  // Display results.
  resultSpan.textContent = distance.toFixed(2);
}
