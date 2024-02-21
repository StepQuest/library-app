const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.showInfo = function() {
      return `${title} by ${author}, ${pages} pages, ${status}`
    };
}
  

function addBookToLibrary() {

    let newBook = new Book(
    prompt('Write titile of a new book:'),
    prompt('Write an author of the book:'),
    prompt('How many pages does the book has?'),
    prompt('Have you already done the book?')
    );

    myLibrary.push(newBook);
    console.log(myLibrary);
}


addBookToLibrary();

// const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// const book2 = new Book('12 Angry Men', 'Margeret Willow', 621, 'already done');

// console.log(book1.showInfo());
// console.log(book2.showInfo());


