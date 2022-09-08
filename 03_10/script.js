/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const myBook = new Book(
  "Peter Cottontail",
  "Bob Woodward",
  "Non-Fiction",
  "Random Town Publishing",
  true,
  true
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

console.log("Details of my new book are: ", myBook);
myBook.setAvailable(false);
myBook.setUnread(false);
console.log("Updated book details are: ", myBook);
