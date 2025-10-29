"use strict";

const form = document.getElementById("form");
const numberInput = document.getElementById("numberInput");
const table = document.getElementById("table");
const div = document.getElementById("resultDiv");

// When page is loaded run code.
window.onload = function () {
  // Prompt user for a number.
  const response = prompt("Input a positive integer.");

  // Check for invalid response
  if (response === "" || response <= 0) {
    alert("Invalid input.");
    return;
  }

  // Parse response to integer.
  const n = parseInt(response);

  let array = [];

  // Nested for loop creates a 2D array with products.
  for (let i = 1; i <= n; i++) {
    array.push([]);
    for (let j = 1; j <= n; j++) {
      array[i - 1].push(i * j);
    }
  }

  // Nester for loop displays products in a formatted table.
  for (let i = 0; i < n; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < n; j++) {
      let cell = document.createElement("td");
      cell.textContent = array[i][j];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  // Display results.
  div.style.display = "block";
};
