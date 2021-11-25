// UI object
const ui = new UI();

// Selectors
const bookTable = document.getElementById('bTable');
const submitBtn = document.getElementById('subBtn');

// Events
submitBtn.addEventListener('click', addBook);

function addBook() {
    // get form input
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookIsbn = document.getElementById('isbn').value;

    const book = new Book(bookTitle, bookAuthor, bookIsbn);

    ui.addBook(book);

}