"use strict";

const form = document.getElementById("form");
const scoreInput = document.getElementById("scoreInput");
const resultSpan = document.getElementById("resultSpan");

// Add event listener for form submit.
form.addEventListener("submit", func);

// Function for determining grade and displaying it to DOM.
function func(event) {
  // Stop page reload.
  event.preventDefault();

  // Check if input value is empty.
  if (scoreInput.value === "") {
    alert("Input is empty.");
    return;
  }

  const score = parseFloat(scoreInput.value);

  let result = "";

  // Determine grade depending on score.
  switch (true) {
    case score >= 0 && score <= 39:
      result = "0";
      break;
    case score <= 51:
      result = "1";
      break;
    case score <= 63:
      result = "2";
      break;
    case score <= 75:
      result = "3";
      break;
    case score <= 87:
      result = "4";
      break;
    case score <= 100:
      result = "5";
      break;
    default:
      alert("Invalid score.");
      return;
  }

  // Display results.
  resultSpan.textContent = result;
}
