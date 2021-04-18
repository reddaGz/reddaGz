
function addBookPageLoad(){
  let super_admin = new SuperAdmin();
    let addBook = document.getElementById("addBook");
    let m1Address=new Address("127 Marthin luthe king","Boston","MA",3456)
    let m2Address=new Address("345 south roxcebery","Boston","MA",3456)
    let m1=new Person("samri","gidey","617-516-5678","1989/05/23",m1Address) 
    let m2=new Person("tsega","desta","617-516-6790","1999/11/12",m1Address) 
    let newBook=new Book(14523,"intoduction to java scrpts",m1)
    let newBook1=new Book(18423,"data structure",m2)
    Library.arr.store.push(newBook)
    Library.arr.store.push(newBook1);
    addBook.onclick=addBooks;
function addBooks() {
     let bookId = document.getElementById("bookId").value;
     let bookTitle=document.getElementById("title").value
     let numAuthors = +document.getElementById("authorNumber").value;
     let firstName = document.getElementById("firstName").value;
     let lastName = document.getElementById("lastName").value;
     let dob = document.getElementById("dateOfBirth").value;
     let phoneNum = document.getElementById("phoneNum").value;
     let street = document.getElementById("street").value;
     let state = document.getElementById("state").value;
     let city = document.getElementById("city").value;
     let zip = document.getElementById("zip").value;
     if(!(bookId===""||bookTitle===""||firstName===""||
     lastName===""||dob===""||phoneNum===""||street===""
     ||state===""||city===""||zip==="")){
      newBook();
     }
     else{
       alert("fill all first")
     }
    /**
     * add ne book
     */
     function newBook() {
       let personAddress;
       let bookAuthor;
       let new_book;
       personAddress = new Address(street, city, state, zip);
       bookAuthor = new Person(
         firstName,
         lastName,
         phoneNum,
         new Date(dob),
         personAddress
       );
       new_book = new Book(bookId,bookTitle,bookAuthor);
       super_admin.addNewBook(new_book);
       alert("added new book");
       document.getElementById("bookId").value = "";
       document.getElementById("firstName").value = "";
       document.getElementById("lastName").value = "";
       document.getElementById("dateOfBirth").value = "";
       document.getElementById("phoneNum").value = "";
       document.getElementById("street").value = "";
       document.getElementById("state").value = "";
       document.getElementById("city").value = "";
       document.getElementById("zip").value = ""; 
     }
   }
}

function init(){
    window.onload=addBookPageLoad;
}

init();