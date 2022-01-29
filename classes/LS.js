class LS {
    // Helper functions
    getData(name){
        let data;
        if(localStorage.getItem(name) === null){
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem(name));
        }
        return data;
    }

    setData(name, data){
        localStorage.setItem(name, JSON.stringify(data));
    }

    addBook(book){
        let books = this.getData('books');
        books.push(book);
        this.setData('books', books);
    }

    delBook(bookISBN) {
        let books;
        //check for books in LS
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        books.forEach(function (book, index) {
            if(book.isbn === bookISBN) {
                books.splice(index, 1)
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}