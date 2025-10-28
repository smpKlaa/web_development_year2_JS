"use strict";

const form = document.getElementById("form");
const celsiusInput = document.getElementById("celsiusInput");
const fResult = document.getElementById("fResult");
const kResult = document.getElementById("kResult");

// Add event listener for form submit.
form.addEventListener("submit", convert);

// Function for converting and displaying results to DOM.
function convert(event) {
  // Stop page reload.
  event.preventDefault();

  // Check if input value is empty.
  if (celsiusInput.value == "") {
    alert("Input is empty.");
    return;
  }

  const value = parseFloat(celsiusInput.value);

  // Calculate results.
  const fValue = (value * 9) / 5 + 32;
  const kValue = value + 273.15;

  // Display results.
  fResult.textContent = fValue.toFixed(2);
  kResult.textContent = kValue.toFixed(2);
}
