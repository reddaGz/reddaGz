
function viewPageLoad(){
    let super_admin =new SuperAdmin()
    let m1Address=new Address("127 Marthin luthe king","Boston","MA",3456)
    let m2Address=new Address("345 south roxcebery","Boston","MA",3456)
    let m1=new Person("samri","gidey","617-516-5678","1989/05/23",m1Address) 
    let m2=new Person("tsega","desta","617-516-6790","1999/11/12",m1Address) 
    let newBook=new Book(14523,"intoduction to java scrpts",m1)
    let newBook1=new Book(18423,"data structure",m1)
    Library.arr.store.push(newBook)
    Library.arr.store.push(newBook1);
    let books=[];
    for(let book of Library.arr.store){
        if(book instanceof Book){
            books.push(book)
        }
    }
    let view_title=document.getElementById("showBookTitle")
    let view_author=document.getElementById("showAuthor")
    let view_both=document.getElementById("showAll")
    let searc_book=document.getElementById("searchBook")
    view_title.onclick=viewBookTitle;
    view_author.onclick=viewAuthor;
    view_both.onclick=viewNameOfBook;
    searc_book.onclick=searchBook;
  function viewAuthor(){
    super_admin.viewAuthorInfo(books)
  }
  function viewNameOfBook(){
      super_admin.viewBookInformation(books)
    
  }
  function viewBookTitle(){
    super_admin.viewBookTitle(books)
 
  }
  function searchBook(){
      super_admin.searchBooks(books)
  }

}

function init(){
    window.onload=viewPageLoad
}
init();