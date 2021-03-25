  
"use strict";

// let library = [
//     { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
//     { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
//     { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
// ];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    const titles = findTitles();
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions
    return titles;
}
////
/**
 * @returns {undefined}
 */
 function showAuthors() {
    const authors = findAuthors();
    authors.sort();
    const authorString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findAuthors() {
    let authors = [];
    authors = [ "Bill Gates", "Steve Jobs","Suzanne Collins"];  //FIX THIS!!
    // implement this and other functions
    return authors;
}

/**

 * @returns {undefined}
 */
 function showIDs() {
    const ids = findIds();
   ids.sort();
    const idString = ids.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findIds() {
    let ids = [];
    ids = [ 1254, 4264,3245 ];  //FIX THIS!!
    return ids;
}

function addBook(book){
    let newBook={};
    newBook.id=book.id;
    newBook.title=book.title;
    newBook.author=book.author;
    return book;
}
// {libraryID:1144,title:"My New Book", author:"Me Too"}
// function addBook(newBook){
    
// }