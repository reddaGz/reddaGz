// function pageLoad() {
//   libraryManagement();

//   /**
//    * library Management
//    */
//   function libraryManagement() {
//     let addMem = document.getElementById("addMemebr");
//     let addBook = document.getElementById("addBook");
//     let memberId = document.getElementById("memberId");
//     let generateIdMember = document.getElementById("generateId");
//     let arrayId = [];
//     let super_admin = new SuperAdmin();
//     addBook.onclick=addBooks;
//     addMem.onclick=addMembers;
//     generateIdMember.onclick = generateMemberID;
//     newMember();
//     function generateMemberID() {
//         alert("generate id ")
//         const minId = 1000;
//         const maxId = 9999;
//      let id = Math.random() * (maxId - minId) + minId;
//      while (true) {
//        if (arrayId.findIndex((item) => item === id) !== -1) break;
//        id = Math.random() * (maxId - minId) + minId;
//      }
//      arrayId.push(memberId);
//      memberId.value = id;
//    }
//     function addMembers() {
//       let firstName = document.getElementById("firstName").value;
//       let lastName = document.getElementById("lastName").value;
//       let dob = document.getElementById("dateOfBirth").value;
//       let phoneNum = document.getElementById("phoneNum").value;
//       let street = document.getElementById("street").value;
//       let state = document.getElementById("state").value;
//       let city = document.getElementById("city").value;
//       let zip = document.getElementById("zip").value;
//       let addMem = document.getElementById("addMemebr");
//       newMember()
//       function newMember() {
//           alert("new Members added")
//         let personAddress = new Address(street, city, state, zip);
//         let newPerson = new Person(
//           firstName,
//           lastName,
//           phoneNum,
//           new Date(dob),
//           personAddress
//         );
//         let newMemebr = new Member(memberId, newPerson);
//         super_admin.addNewLibraryMember(newMemebr);
//         alert("added new new member");
//       }
//     }
//     function addBooks() {
//      alert("added new book test");
//       let bookId = document.getElementById("bookId").value;
//       let numAuthors = +document.getElementById("authorNumber").value;
//       let firstName = document.getElementById("firstName").value;
//       let lastName = document.getElementById("lastName").value;
//       let dob = document.getElementById("dateOfBirth").value;
//       let phoneNum = document.getElementById("phoneNum").value;
//       let street = document.getElementById("street").value;
//       let state = document.getElementById("state").value;
//       let city = document.getElementById("city").value;
//       let zip = document.getElementById("zip").value;
//       newBook();
//       function newBook() {
//         alert("added new book");
//         let personAddress;
//         let bookAuthor;
//         let new_book;
//         personAddress = new Address(street, city, state, zip);
//         bookAuthor = new Person(
//           firstName,
//           lastName,
//           phoneNum,
//           new Date(dob),
//           personAddress
//         );
//         new_book = new Book(bookId, bookAuthor);
//         super_admin.addNewBook(new_book);
//         document.getElementById("bookId").value = "";
//         document.getElementById("firstName").value = "";
//         document.getElementById("lastName").value = "";
//         document.getElementById("dateOfBirth").value = "";
//         document.getElementById("phoneNum").value = "";
//         document.getElementById("street").value = "";
//         document.getElementById("state").value = "";
//         document.getElementById("city").value = "";
//         document.getElementById("zip").value = "";
       
//       }
//     }
//   }
// }

// window.onload = pageLoad;
