function addBook(id,title,author){
    let newBook={ };
    newBook.id=id
    newBook.title=title
    newBook.author=author
    return newBook;
}
function findTitle(libraryBook){
    let title=""
   let  sortTitle=libraryBook.sort((a,b)=>{
        if(a.title>b.title)
            return 1
        else if(a.title<b.title)
            return -1
        else
            return 0
        
    })
    for(let book of sortTitle){
        title+=book.title+"\n";
    }
    return title;
}


function findAuthor(libraryBook){
    let authorBook=""
   let  sortAuthor=libraryBook.sort((a,b)=>{
        if(a.author>b.author)
            return 1
        else if(a.author<b.author)
            return -1
        else
            return 0
        
    })
    for(let book of sortAuthor){
        authorBook+=book.author+"\n";
    }
    return authorBook;
}
function findIDs(libraryBook){
    let idBook=""
   let  sortAuthor=libraryBook.sort((a,b)=>a-b)
    for(let bookId of sortAuthor){
        idBook+=bookId.id+"\n";
    }
    return idBook;
}

function addLibrarayBook(){
    let library=[
        { title: "The Road Ahead", author: "Bill Gates", id: 1254 },
        { title: "Walter Isaacson", author: "Steve Jobs", id: 4264 },
        { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins",id: 3245 }
       ];
  let newBook=addBook(1234,"Introduction to java scrpts","berhe") ;
  library.push(newBook);
 console.log(findAuthor(library))  
 console.log(findIdBook(library)) 
 console.log(findTitle(library))  
}
addLibrarayBook();
//module.exports = {addBook,findTitle,findIdBook,findAuthor,addLibrarayBook};

