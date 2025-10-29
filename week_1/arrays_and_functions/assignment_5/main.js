"use strict";

const array = [6, 1, 8, 2, 4];

// Print original array to console.
console.log("Original array: ", array);

// Print array in ascending order.
console.log("Array in ascending order: ", sortArray(array, "asc"));
// Print array in descending order.
console.log("Array in descending order: ", sortArray(array, "desc"));

// Sorts given array of numbers.
function sortArray(numbers, order) {
  if (order === "asc") {
    return numbers.sort();
  } else if (order === "desc") {
    return numbers.sort((a, b) => b - a);
  }
}
