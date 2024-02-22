const myLibrary = [{
  title: 'Nine Cats',
  author: 'Billy Bob',
  pages: 221,
  status: 'Plan to Read'
},
{
  title: 'Cloudy Weather',
  author: 'Milly Cour',
  pages: 195,
  status: 'Plan to Read'
}
];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.showInfo = function() {
      return `${title} by ${author}, ${pages} pages, ${status}`
    };
}
  

function showBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    addBookCard();

    document.querySelector('.book-card:last-child .book-title').textContent = myLibrary[i].title;
    document.querySelector('.book-card:last-child .book-author').textContent = myLibrary[i].author;
    document.querySelector('.book-card:last-child .book-pages').textContent = myLibrary[i].pages + ' pages';
   
  }
}

let libraryHTML = document.querySelector('.library');
let SVGicon = '<svg class="book-icon" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"> <path d="M26,7H9C8.4,7,8,6.6,8,6s0.4-1,1-1h17c0.6,0,1,0.4,1,1S26.6,7,26,7z"></path> <path d="M26,8H11H9C7.9,8,7,7.1,7,6s0.9-2,2-2h17c0.6,0,1-0.4,1-1s-0.4-1-1-1H9C6.8,2,5,3.8,5,6v20c0,2.2,1.8,4,4,4h2h15 c0.6,0,1-0.4,1-1V9C27,8.4,26.6,8,26,8z"></path> </svg>';

function addBookCard() {
  libraryHTML.appendChild(document.createElement('div')).classList.add('book-card');
  let createdNewBookCard = document.querySelector('.book-card:last-child');

  createdNewBookCard.appendChild(document.createElement('h1')).classList.add('book-title');
  createdNewBookCard.innerHTML += SVGicon;
  createdNewBookCard.appendChild(document.createElement('h4')).classList.add('book-author');
  createdNewBookCard.appendChild(document.createElement('p')).classList.add('book-pages');
}


// document.createElement('div').classList.add('book-card')
showBooks();
showBooks();


// function addBookToLibrary() {

//     let newBook = new Book(
//     prompt('Write titile of a new book:'),
//     prompt('Write an author of the book:'),
//     prompt('How many pages does the book has?'),
//     prompt('Have you already done the book?')
//     );

//     myLibrary.push(newBook);
//     console.log(myLibrary);
// }


// addBookToLibrary();

// const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// const book2 = new Book('12 Angry Men', 'Margeret Willow', 621, 'already done');

// console.log(book1.showInfo());
// console.log(book2.showInfo());


