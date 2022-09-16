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
  false,
  true
);

book1.setAvailable(false);

const content = `
<article class=book id=firstBook>
  <h3>TITLE: ${book1.Title}</h3>
    <ul class=detailList>
      <li>Author: ${book1.Author}</li>
      <li>Publisher: ${book1.Publisher}</li>
      <li>Availability: ${book1.bAvailable}</li>
    </ul>
  <button class=button>Checkout</button>
</article>
`;

const main = document.querySelector("main");
main.innerHTML = content;

