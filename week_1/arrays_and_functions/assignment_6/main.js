"use strict";

const form = document.getElementById("form");
const nameInput = document.getElementById("nameInput");
const ratingInput = document.getElementById("ratingInput");
const hrmSpan = document.getElementById("highestRatedMovieSpan");
const moviesList = document.getElementById("moviesList");

let movies = [];

form.addEventListener("submit", addBook);

function addBook(event) {
  // Stop page from reloading.
  event.preventDefault();

  // Get title and rating inputs.
  const title = nameInput.value;
  const rating = ratingInput.value;

  // Clear input fields.
  nameInput.value = "";
  ratingInput.value = "";

  // Add movie to array.
  movies.push({
    title: title,
    rating: rating,
  });

  // Sort movies array by movie rating.
  movies.sort((a, b) => b.rating - a.rating);

  // Empty list.
  moviesList.innerHTML = "";

  // Update highest rated movie.
  hrmSpan.textContent = movies[0].title;

  // Fill movies list.
  for (const movie of movies) {
    const item = document.createElement("li");
    const para = document.createElement("p");
    para.textContent = `Title: ${movie.title}, Rating: ${movie.rating}`;
    item.appendChild(para);
    moviesList.appendChild(item);
  }
}
