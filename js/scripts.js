let myLibrary = [];

let totalBooks = 0;

function Book(bookId){
    this.bookId;
    this.name;
    this.author;
    this.pageCount;
}

function addBookToLibrary(){
    let bookId = new Book();

    let name = new Book(prompt("Book name"));

    let author = prompt("Author name");
    let pageCount = prompt("Page count");

    name.author = author;
    name.pageCount = pageCount;

    totalBooks++;
}