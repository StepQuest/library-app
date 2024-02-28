// Global
const myLibrary = [];

const libraryHTML = document.querySelector('.library');
const addBtn = document.querySelector('.anchor');

const bookSVG = '<svg class="book-icon" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"> <path d="M26,7H9C8.4,7,8,6.6,8,6s0.4-1,1-1h17c0.6,0,1,0.4,1,1S26.6,7,26,7z"></path> <path d="M26,8H11H9C7.9,8,7,7.1,7,6s0.9-2,2-2h17c0.6,0,1-0.4,1-1s-0.4-1-1-1H9C6.8,2,5,3.8,5,6v20c0,2.2,1.8,4,4,4h2h15 c0.6,0,1-0.4,1-1V9C27,8.4,26.6,8,26,8z"></path> </svg>';
const crossSVG = '<svg class="remove-btn" fill="#757575" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm8,22.1a1.4,1.4,0,0,1-2,2l-6-6L12,26.12a1.4,1.4,0,1,1-2-2L16,18.08,9.83,11.86a1.4,1.4,0,1,1,2-2L18,16.1l6.17-6.17a1.4,1.4,0,1,1,2,2L20,18.08Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>';

// Welcome Page

const emptyLibrary = document.querySelector('.empty-library');
const signinBtn = document.querySelector('.sign-in').addEventListener('click', () => {
  emptyLibrary.style.display = 'none';
  libraryHTML.style.display = 'grid';
});

// Library after sign in

myLibrary.push(new Book('Atomic Habits', 'James Clear', 336, 'Plan to Read')); 
myLibrary.push(new Book('The Long Walk', 'Stephen King', 319, 'Plan to Read'));
showTemplateBooks();
updRemoveBtns();
updStatuses();

// *********** FUNCTIONS ***********

// Constructor to create a Book Object

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.showInfo = function() {
      return `${title} by ${author}, ${pages} pages`
    };
};

// Show all template books from the array

function showTemplateBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    createBookCard();

    document.querySelector('.library > div:nth-last-child(2) .book-title').textContent = myLibrary[i].title;
    document.querySelector('.library > div:nth-last-child(2) .book-author').textContent = myLibrary[i].author;
    document.querySelector('.library > div:nth-last-child(2) .book-pages').textContent = myLibrary[i].pages + ' pages';

    document.querySelector('.library > div:nth-last-child(2)').setAttribute('data-obj-index', i);
    document.querySelector('.library > div:nth-last-child(2) select').setAttribute('data-obj-index', i);
    document.querySelector('.library > div:nth-last-child(2) > .remove-btn').setAttribute('data-obj-index', i);
    
  }
};

// Create New Book Card

function createBookCard() {
    libraryHTML.insertBefore(document.createElement('div'), addBtn);
    const createdNewBookCard = document.querySelector('.library > div:nth-last-child(2)');

    createdNewBookCard.classList.add('book-card');
    createdNewBookCard.setAttribute('data-obj-index', myLibrary.length - 1);

    createdNewBookCard.appendChild(document.createElement('h1')).classList.add('book-title');
    createdNewBookCard.innerHTML += bookSVG;
    createdNewBookCard.appendChild(document.createElement('h4')).classList.add('book-author');
    createdNewBookCard.appendChild(document.createElement('p')).classList.add('book-pages');

    createdNewBookCard.appendChild(document.createElement('select')).classList.add('status');
    const selectElement = document.querySelector('.library > div:nth-last-child(2) select');
    selectElement.setAttribute('data-obj-index', myLibrary.length - 1);
    selectElement.appendChild(document.createElement('option')).setAttribute('value', 'reading');
    selectElement.appendChild(document.createElement('option')).setAttribute('value', 'completed');
    selectElement.appendChild(document.createElement('option')).setAttribute('value', 'on-hold');
    selectElement.appendChild(document.createElement('option')).setAttribute('value', 'dropped');
    selectElement.appendChild(document.createElement('option')).setAttribute('value', 'plan-to-read');

    document.querySelector('.library > div:nth-last-child(2) option[value="reading"').textContent = 'Reading';
    document.querySelector('.library > div:nth-last-child(2) option[value="completed"').textContent = 'Completed';
    document.querySelector('.library > div:nth-last-child(2) option[value="on-hold"').textContent = 'On-Hold';
    document.querySelector('.library > div:nth-last-child(2) option[value="dropped"').textContent = 'Dropped';
    document.querySelector('.library > div:nth-last-child(2) option[value="plan-to-read"').textContent = 'Plan to Read';

    createdNewBookCard.innerHTML += crossSVG;
    document.querySelector('.library > div:nth-last-child(2) .remove-btn').setAttribute('data-obj-index', myLibrary.length - 1);
};

// Last part of validation. If all inputs is valid, then undisable button.

function undisableBtn() {
  if (inputTitle.checkValidity() && inputAuthor.checkValidity() && inputPages.checkValidity()) {
    inputButton.removeAttribute('disabled', '');
  } else {
    inputButton.setAttribute('disabled', '');
  };
};

// Get arrey of remove buttons and add event listener
function updRemoveBtns() {
  let removeBtns = document.querySelectorAll('.remove-btn');

  removeBtns.forEach((button) => {
  button.addEventListener('click', () => {
    let index = button.getAttribute('data-obj-index');

    libraryHTML.removeChild(document.querySelector(`div[data-obj-index="${index}"]`));
  })

})
};

// Get arrey of status inputs and change value of it in myLibrary arrey
// The function changes key properties in the object, but don't set new option as selected 

function updStatuses() {

  let allStatuses =  document.querySelectorAll('.status');

  allStatuses.forEach((eachStatus) => {
    eachStatus.addEventListener('change', () => {
      let index = eachStatus.getAttribute('data-obj-index');

      myLibrary[index].status = eachStatus.value;
    })
  })
};

// *********** EVENTS ***********

// Show form to add new book after click on the "+" button

// const addNewBookBtn = document.querySelector('.add-book-btn');
const addBtnDiv = document.querySelector('.add-book');
const newBookFormDiv = document.querySelector('.add-book-form');

document.querySelector('.add-book-btn').addEventListener('click', () => {
  addBtnDiv.style.display = 'none';
  newBookFormDiv.style.display = 'block';
  document.querySelector(`#status`).value =  'reading';
});

// Save inputs' data in variables

const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputStatus = document.querySelector('#status');
const inputButton = document.querySelector('.add-btn-form');
let bookTitle;
let bookAuthor;
let bookPages;
let bookStatus = 'reading';

inputTitle.addEventListener('input', () => {
  bookTitle = inputTitle.value;
  undisableBtn();
});

inputAuthor.addEventListener('input', () => {
  bookAuthor = inputAuthor.value;
  undisableBtn();
});

inputPages.addEventListener('input', () => {
  bookPages = inputPages.value;
  undisableBtn();
});

inputStatus.addEventListener('change', () => {
  bookStatus = inputStatus.value;
});

// After undisabled button that passed verification, add new book to arrey, show it on the site and reset input variables

inputButton.addEventListener('click', () => {
    myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookStatus));

    createBookCard();

    document.querySelector('.library > div:nth-last-child(2) .book-title').textContent = myLibrary[myLibrary.length - 1].title;
    document.querySelector('.library > div:nth-last-child(2) .book-author').textContent = myLibrary[myLibrary.length - 1].author;
    document.querySelector('.library > div:nth-last-child(2) .book-pages').textContent = myLibrary[myLibrary.length - 1].pages + ' pages';
    document.querySelector(`.library > div:nth-last-child(2) option[value="${bookStatus}"]`).setAttribute('selected', '');

    addBtnDiv.style.display = 'flex';
    newBookFormDiv.style.display = 'none';

    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    bookStatus = 'reading';

    updRemoveBtns();
    updStatuses();
    
    inputButton.setAttribute('disabled', '');
});

