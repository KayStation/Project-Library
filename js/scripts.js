addButton = document.getElementById('addButton');

let myLibrary = [];

let totalBooks = 0;

function Book(name, author, pageCount){
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
}

function addBookToLibrary(){
    let name = prompt("Book name");
    let author = prompt("Author");
    let pageCount = prompt("Number of pages");

    const newBook = new Book(name, author, pageCount);

    myLibrary.push(newBook);
    totalBooks++;
}

addButton.addEventListener('click', function(){
    addBookToLibrary();
})