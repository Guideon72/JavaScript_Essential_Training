/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Book {
  constructor(
    //defines parameters of the object
    Title,
    Author,
    Genre,
    Publisher,
    bAvailable,
    bUnread
  ) {
    //assign parameter values to object properties
    this.Title = Title;
    this.Author = Author;
    this.Genre = Genre;
    this.Publisher = Publisher;
    this.bAvailable = bAvailable;
    this.bUnread = bUnread;
  }
  // //Add methods here
  setAvailable(bAvailable) {
    if (bAvailable == true) {
      this.bAvailable = "Available";
    } else {
      this.bAvailable = "Checked Out";
    }
  }

  setUnread(bUnread) {
    if (bUnread == true) {
      this.bUnread = "You have not read this book.";
    } else {
      this.bUnread = "You have read this book and should check out another.";
    }
  }
}

export default Book;
