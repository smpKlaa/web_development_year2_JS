"use strict";

const array = [6, 1, 8, 2, 4];

// Print original array to console.
console.log("Original array: ", array);

// Print sorted array to console.
console.log("Sorted array: ", sortArray(array));

// Sorts given array of numbers.
function sortArray(nums) {
  return nums.sort();
}
