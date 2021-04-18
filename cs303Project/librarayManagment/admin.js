/**
   * Administrator class
   */
 class Administrator extends Librarian {
    addNewLibraryMember(newMember) {
         Library.arr.store.push(newMember)
    }
   getNumberOfMember(){
      
    //will implemented  
   }
    addNewBook(newBook) {
      Library.arr.store.push(newBook)
    }
    addBookCopy(){
      //will implemented  
    }
    getNumberOfBooks(){
     //will implemented  
  }
   
  }