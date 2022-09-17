/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
import Book from "./Book.js";

const book1 = new Book(
  "Book One",
  "Sam I Am",
  "Thriller",
  "Our House Publishing",
  "Available",
  "Unread"
);

const book2 = new Book(
  "Book Two",
  "Blue Eggs & Ham",
  "Cooking",
  "Baseline Pub Group",
  "Available",
  "Unread"
);

const addBook = function (currentBook) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <article class=book id=firstBook>
      <h3>TITLE: ${currentBook.Title}</h3>
        <ul class=detailList>
          <li>Author: ${currentBook.Author}</li>
          <li>Publisher: ${currentBook.Publisher}</li>
          <li>Availability: ${currentBook.bAvailable}</li>
          <li>Read: ${currentBook.bUnread}</li>
        </ul>
      <button type="button" id="clickMe">Check Out</button>
    </article>
  `;
  return newArticle;
};

function checkOut(state) {
  if (state == true) {
    book1.setAvailable(true);
  } else {
    book1.setAvailable(false);
  }
}

const reader = (state) => {
  if (state == true) {
    book2.setUnread(true);
  } else {
    book2.setUnread(false);
  }
};

checkOut(false);
reader(false);

const main = document.querySelector("main");
main.append(addBook(book1));
main.append(addBook(book2));



