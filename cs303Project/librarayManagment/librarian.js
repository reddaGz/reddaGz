/**
   *
   * Librarian class
   */
 class Librarian {
    //  static storage=[]
     nameComparator(per1,per2){
      let n1=per1.getPerson().getFirstName().localeCompare(per2.getPerson().getFirstName())
      let n2=per1.getPerson().getLastName().localeCompare(per2.getPerson().getLastName())
      if(n1!==0)return n1 
      else return n2
       
  }
   idComparator(per1,per2){
      let id1=+per1.getMemberId();
      let id2=+per2.getMemberId();
      return id1-id2
  }
  bookIdComparator(book1,book2){
    let n1=+book1.getBookId()
    let n2=+book2.getBookId()
    return n1-n2
  }
  bookTitleComparator(book1,book2){
  return book1.getTitle().localeCompare(book2.getTitle())
  }
  bookAuthorComparator(book1,book2){
    return book1.getAuthor().getFirstName().localeCompare(book2.getAuthor().getFirstName())
  }
    viewLibraryMemberName(members) {
      let nameList=""
     let i=1;
     let memberList=members.sort(this.nameComparator)
     for(let name of memberList){
         let fullName=name.getPerson().getFirstName()+" "+name.getPerson().getLastName()
        nameList= nameList+i+". "+fullName+"\n" 
        i++;
     }
     document.getElementById("memberList").innerHTML=nameList;
    }
 
    searchMember(members){
      let target=document.getElementById("searchMember").value
      let searchedMem=members.find((item)=>item.getMemberId()===target)
     // alert(searchedMember.getPerson().getFirstName())
      //let fullName=searchedMember.getPerson().getFirstName()+" "+searchedMember.getPerson().getLastName()
      //let mem1=searchedMember.getMemberId()+" "+fullName;
      document.getElementById("memberList").innerHTML=searchedMem.getMemberId(); 
  }
    viewBookInformation(books){
      let listOfBook=""
     let bookLists=books.sort(this.bookIdComparator)
     for(let book of bookLists ){
         let fullName=book.getAuthor().getFirstName()+" "+book.getAuthor().getLastName()
         let mem1= "Book id:"+book.getBookId()+" Title: "+book.getTitle()+" Author"+fullName;
         listOfBook= listOfBook+" "+mem1+" \n"
     }
     document.getElementById("bookList").innerHTML=listOfBook
    }
    viewBookTitle(books){
      let listTitle=""
     let bookLists=books.sort(this.bookTitleComparator)
     for(let book of bookLists ){
      listTitle= listTitle+" "+book.getTitle()+" \n"
     }
     document.getElementById("bookList").innerHTML=listTitle
    }

    searchBooks(books){
      let target=+document.getElementById("searchInput").value
      let searchedBook=books.find((item)=>item.getBookId()===target)
      if(searchedBook!==undefined){
        let fullName=searchedBook.getAuthor().getFirstName()+" "+searchedBook.getAuthor().getLastName()
        let seeBook= "Book id:"+searchedBook.getBookId()+" Title: "+searchedBook.getTitle()+" Author:"+fullName;
        document.getElementById("bookList").innerHTML=seeBook; 
      }else{
        alert("this book is not available")
      }
  }
  viewAuthorInfo(books){
    let listOfAuthor=""
   let bookLists=books.sort(this.bookAuthorComparator)
   for(let book of bookLists ){
     let authorName=book.getAuthor().getFirstName()+" "+book.getAuthor().getLastName()
    listOfAuthor= listOfAuthor+" "+authorName+" \n"
   }
   document.getElementById("bookList").innerHTML=listOfAuthor
  }
  
    checkOutBook(member ,book) {
     let save=new CheckOut(book,member)
     Status.status.push(save)
    }
    //maximum check out length length 
    viewCheckOutStatus(memberId,bookId,checkOutdate,dueDate) {
      //will implemented
    }
  }