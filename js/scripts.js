// DOM variables
addButton = document.getElementById('addButton');

// Library manipulation
let myLibrary = [];

function Book(name, author, pageCount, read){
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
    // Function to delete

}

function addBookToLibrary(){
    let name = prompt("Book name");
    let author = prompt("Author");
    let pageCount = prompt("Number of pages");
    
    //* Add a toggle button for read.

    const newBook = new Book(name, author, pageCount);

    myLibrary.push(newBook);
    
}

function removeBookFromLibrary(index){
    myLibrary.splice(index, index);
}



// Buttons
addButton.addEventListener('click', function(){
    addBookToLibrary();
})