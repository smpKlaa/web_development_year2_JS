"use strict";

const form = document.getElementById("form");
const side1Input = document.getElementById("side1Input");
const side2Input = document.getElementById("side2Input");
const side3Input = document.getElementById("side3Input");
const resultParagraph = document.getElementById("resultParagraph");

// Add event listener for form submit.
form.addEventListener("submit", func);

// Function for determining the triangle type and displaying results to DOM.
function func(event) {
  // Stop page reload.
  event.preventDefault();

  // Check if input value is empty.
  if (
    side1Input.value === "" ||
    side2Input.value === "" ||
    side3Input.value === ""
  ) {
    alert("Input is empty.");
    return;
  }

  const side1 = parseFloat(side1Input.value);
  const side2 = parseFloat(side2Input.value);
  const side3 = parseFloat(side3Input.value);

  let result = "";

  // Determine the type of triangle.
  switch (true) {
    case side1 === side2 && side1 === side3:
      result = "The triangle is equilateral.";
      break;
    case side1 == side2 || side2 == side3 || side1 == side3:
      result = "The triangle is isosceles.";
      break;
    default:
      result = "The triangle is scalene.";
      break;
  }

  // Display results.
  resultParagraph.textContent = result;
}
