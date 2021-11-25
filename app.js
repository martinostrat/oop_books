// UI object & LS object
const ui = new UI();
const ls = new LS();

// Selectors
const bookTable = document.getElementById('bTable');
const submitBtn = document.getElementById('subBtn');

// Events
submitBtn.addEventListener('click', addBook);
document.addEventListener('DOMContentLoaded', getBooksFromLocalStorage);

function getBooksFromLocalStorage() {
    let books = ls.getData('books');
    for(let i = 0; i < books.length; i++) {
        let book = books[i];
        ui.addBook(book);
    }
}

function addBook() {
    // get form input
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookIsbn = document.getElementById('isbn').value;

    const book = new Book(bookTitle, bookAuthor, bookIsbn);

    // add book to table
    ui.addBook(book);
    // add book to ls
    ls.addBook(book);



}