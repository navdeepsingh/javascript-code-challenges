/*
  WRITE YOUR SOLUTION HERE
  Category: Prototype Chain

  Notes: Declare the function so each instance doesnt create a new function
*/
// class Movie {
//   constructor(title, director, genre, releaseYear, rating) {
//     this.title = title;
//     this.director = director;
//     this.genre = genre;
//     this.releaseYear = releaseYear;
//     this.rating = rating;
//   }

//   getOverview() {
//     return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
//   }
// }

function Movie(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie.prototype.getOverview = function () {
  return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
};

const movie = new Movie(
  "Bridge of Skies",
  "Steven Spielbeg",
  "History",
  2015,
  7.6
);

console.log(movie.getOverview());
