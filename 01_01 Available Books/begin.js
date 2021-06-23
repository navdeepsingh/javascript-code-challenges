/*
  WRITE YOUR SOLUTION HERE
*/
/**
 * Classes Solution
 */
class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "out of stock";
    } else if (this.numCopies < 10) {
      return "low stock";
    }
    return "in stock";
  }

  sell(num = 1) {
    this.numCopies = this.numCopies - num;
  }

  restock(numCopies) {
    this.numCopies = numCopies;
  }
}

const book1 = new Book("Girl in the room", "Chetan Bhagat", "I333", 2);
console.log(book1.availability);
book1.sell(2);
console.log(book1.availability);
book1.restock(20);
console.log(book1.availability);

// function Book(title, author, isbn, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.isbn = isbn;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function () {
//   if (this.numCopies === 0) {
//     return "out of stock";
//   } else if (this.numCopies < 10) {
//     return "low stock";
//   }
//   return "in stock";
// };

// Book.prototype.sell = function (num = 1) {
//   this.numCopies -= num;
// };

// Book.prototype.restock = function (numCopies = 5) {
//   this.numCopies = numCopies;
// };

// const book1 = new Book("Kiss of Life", "Emraan Hashmi", "I988", 10);
// console.log(book1.getAvailability());
