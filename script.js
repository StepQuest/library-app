const myLibrary = [{
  title: 'Atomic Habits',
  author: 'James Clear',
  pages: 336,
  status: 'Plan to Read'
},
{
  title: 'The Long Walk',
  author: 'Stephen King',
  pages: 319,
  status: 'Plan to Read'
}
];



// console.log(myLibrary[myLibrary.length - 1].title);


function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.showInfo = function() {
      return `${title} by ${author}, ${pages} pages`
    };
}
  

// Create New Book Card

let libraryHTML = document.querySelector('.library');
let addBtn = document.querySelector('.anchor');

let SVGicon = '<svg class="book-icon" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"> <path d="M26,7H9C8.4,7,8,6.6,8,6s0.4-1,1-1h17c0.6,0,1,0.4,1,1S26.6,7,26,7z"></path> <path d="M26,8H11H9C7.9,8,7,7.1,7,6s0.9-2,2-2h17c0.6,0,1-0.4,1-1s-0.4-1-1-1H9C6.8,2,5,3.8,5,6v20c0,2.2,1.8,4,4,4h2h15 c0.6,0,1-0.4,1-1V9C27,8.4,26.6,8,26,8z"></path> </svg>';


let SVGicon2 = '<svg class="remove-btn" fill="#757575" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>remove-solid</title> <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm8,22.1a1.4,1.4,0,0,1-2,2l-6-6L12,26.12a1.4,1.4,0,1,1-2-2L16,18.08,9.83,11.86a1.4,1.4,0,1,1,2-2L18,16.1l6.17-6.17a1.4,1.4,0,1,1,2,2L20,18.08Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>';




// let SVGicon2 = '<svg class="remove-btn" fill="#757575" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1792 1792" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4 c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1 c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"></path> </g></svg>';

function createBookCard() {
    libraryHTML.insertBefore(document.createElement('div'), addBtn);
    document.querySelector('.library > div:nth-last-child(2)').classList.add('book-card');
    document.querySelector('.library > div:nth-last-child(2)').setAttribute('data-obj-index', myLibrary.length - 1);

    let createdNewBookCard = document.querySelector('.library > div:nth-last-child(2)');

    createdNewBookCard.appendChild(document.createElement('h1')).classList.add('book-title');
    createdNewBookCard.innerHTML += SVGicon;
    createdNewBookCard.appendChild(document.createElement('h4')).classList.add('book-author');
    createdNewBookCard.appendChild(document.createElement('p')).classList.add('book-pages');

    createdNewBookCard.appendChild(document.createElement('select')).classList.add('status');
    let selectTag = document.querySelector('.library > div:nth-last-child(2) select');
    selectTag.setAttribute('data-obj-index', myLibrary.length - 1);

    selectTag.appendChild(document.createElement('option')).setAttribute('value', 'reading');
    selectTag.appendChild(document.createElement('option')).setAttribute('value', 'completed');
    selectTag.appendChild(document.createElement('option')).setAttribute('value', 'on-hold');
    selectTag.appendChild(document.createElement('option')).setAttribute('value', 'dropped');
    selectTag.appendChild(document.createElement('option')).setAttribute('value', 'plan-to-read');

    document.querySelector('.library > div:nth-last-child(2) option[value="reading"').textContent = 'Reading';
    document.querySelector('.library > div:nth-last-child(2) option[value="completed"').textContent = 'Completed';
    document.querySelector('.library > div:nth-last-child(2) option[value="on-hold"').textContent = 'On-Hold';
    document.querySelector('.library > div:nth-last-child(2) option[value="dropped"').textContent = 'Dropped';
    document.querySelector('.library > div:nth-last-child(2) option[value="plan-to-read"').textContent = 'Plan to Read';

    // createdNewBookCard.appendChild(document.createElement('button')).classList.add('remove-btn');
    // document.querySelector('.library > div:nth-last-child(2) > .remove-btn').textContent = '-';
    // document.querySelector('.library > div:nth-last-child(2) > .remove-btn').setAttribute('data-obj-index', myLibrary.length - 1);

    createdNewBookCard.innerHTML += SVGicon2;
    // document.querySelector('.library > div:nth-last-child(2) > .remove-btn').textContent = '-';
    document.querySelector('.library > div:nth-last-child(2) > .remove-btn').setAttribute('data-obj-index', myLibrary.length - 1);


}






// Show All Books From The Array

function showBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    createBookCard();

    document.querySelector('.library > div:nth-last-child(2) .book-title').textContent = myLibrary[i].title;
    document.querySelector('.library > div:nth-last-child(2) .book-author').textContent = myLibrary[i].author;
    document.querySelector('.library > div:nth-last-child(2) .book-pages').textContent = myLibrary[i].pages + ' pages';

    document.querySelector('.library > div:nth-last-child(2) select').setAttribute('data-obj-index', i);

    document.querySelector('.library > div:nth-last-child(2)').setAttribute('data-obj-index', i);
    document.querySelector('.library > div:nth-last-child(2) > .remove-btn').setAttribute('data-obj-index', i);
    
  }
}




// Add new book

function createFormCard() {
  libraryHTML.appendChild(document.createElement('div')).classList.add('add-book-form', 'book-card');
  let formCard = document.querySelector('.add-book-form');

  formCard.appendChild(document.createElement('form'));
};

// createFormCard();

showBooks();

let BUTTON = document.querySelector('.add-btn');
let addBtnHTML = document.querySelector('.add-book');
let addFormHTML = document.querySelector('.add-book-form');
BUTTON.addEventListener('click', () => {
  addBtnHTML.style.display = 'none';
  addFormHTML.style.display = 'block';
  document.querySelector(`#status`).value =  'reading';
  

});


let inputTitle = document.querySelector('#title');
let inputAuthor = document.querySelector('#author');
let inputPages = document.querySelector('#pages');
let inputStatus = document.querySelector('#status');
let bookTitle;
let bookAuthor;
let bookPages;
let bookStatus = 'reading';
console.log(inputStatus.value);

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

let inputButton = document.querySelector('.add-btn-form');


inputButton.addEventListener('click', () => {
    myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookStatus));

    createBookCard();


    document.querySelector('.library > div:nth-last-child(2) .book-title').textContent = myLibrary[myLibrary.length - 1].title;
    document.querySelector('.library > div:nth-last-child(2) .book-author').textContent = myLibrary[myLibrary.length - 1].author;
    document.querySelector('.library > div:nth-last-child(2) .book-pages').textContent = myLibrary[myLibrary.length - 1].pages + ' pages';
    document.querySelector(`.library > div:nth-last-child(2) option[value="${bookStatus}"]`).setAttribute('selected', '');

    addBtnHTML.style.display = 'flex';
    addFormHTML.style.display = 'none';

    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';

    bookStatus = 'reading';

    updRemoveBtns();
    updStatuses();
    
    inputButton.setAttribute('disabled', '');

});



// Remove Button


function updRemoveBtns() {
  let tesT = document.querySelectorAll('.remove-btn');

tesT.forEach((button) => {
  button.addEventListener('click', () => {
    let index = button.getAttribute('data-obj-index');

    libraryHTML.removeChild(document.querySelector(`div[data-obj-index="${index}"]`));
    console.log(index);
  })
})
};

updRemoveBtns();

// Book Status Listeners
// The function changes key properties in the object, but don't set new option as selected 

function updStatuses() {

  let allStatuses =  document.querySelectorAll('.status');

  allStatuses.forEach((eachStatus) => {
    eachStatus.addEventListener('change', () => {
      let index = eachStatus.getAttribute('data-obj-index');

      myLibrary[index].status = eachStatus.value;
      console.log(index);
      console.log(eachStatus.value);
    })
  })
};

updStatuses();



function undisableBtn() {
  if (inputTitle.checkValidity() && inputAuthor.checkValidity() && inputPages.checkValidity()) {
    inputButton.removeAttribute('disabled', '');
  } else {
    inputButton.setAttribute('disabled', '');
  };
};
