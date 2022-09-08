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
    Available,
    Unread
  ) {
    //assign parameter values to object properties
    this.Title = Title;
    this.Author = Author;
    this.Genre = Genre;
    this.Publisher = Publisher;
    this.Available = Available;
    this.Unread = Unread;
  }
  //Add methods here
  setAvailable(isAvailable) {
    this.Available = isAvailable;
  }

  setUnread(isUnread) {
    this.Unread = isUnread;
  }
}

export default Book;
