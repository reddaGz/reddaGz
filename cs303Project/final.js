
function libraryManagement(){
    // let library_managementDB=[]
     let library_managementUser=[{
         admin:[admin1,admin2,admin3],
        password:["password1","password2"]},{
          superAdmin:[admin1,admin2,admin3],
          superPassword:["password1","password2"] 
        }
    ]
/**
 * Person class
 */
 class Person {
    /**
     *
     * @param {String} firstName is first name
     * @param {String} lastName is last name
     * @param {String} phoneNum is phone number
     * @param {Object} phoneNum is date of birth
     * @param {Object} address is address
     */
    constructor(firstName, lastName, phoneNum,dob, address) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.phoneNum = phoneNum;
      this.dob=dob;
      this.address = address;
    }
    /**
     *
     * @param {String} firstName set first name
     */
    setFirstName(firstName) {
      this.firstName = firstName;
    }
    setLastName(lastName) {
      this.lastName = lastName;
    }
    setPhonNum(phoneNum) {
      this.phoneNum = phoneNum;
    }
    setDob(dob) {
      this.dob = dob;
    }
    setAddress(address) {
      this.address = address;
    }
    getFirstName() {
      return this.firstName;
    }
    getLastName() {
      return this.lastName;
    }
    getPhonNum() {
      return this.phoneNum;
    }
    getDob() {
      return this.dob;
    }
    getAddress() {
      return this.address;
    }
  }
  /**
   * Address class
   */
  class Address {
    /**
     *
     * @param {String} street is street;
     * @param {String} city is city;
     * @param {String} state is state;
     * @param {Number} zip is zip;
     */
    constructor(street, city, state, zip) {
      this.street = street;
      this.city = city;
      this.state = state;
      this.zip = zip;
    }
    setStreet(street) {
      this.street = street;
    }
    setCity(city) {
      this.city = city;
    }
    setState(state) {
      this.state = state;
    }
    setZip(zip) {
      this.zip = zip;
    }
    getStreet() {
      return this.street;
    }
    getCity() {
      return this.city;
    }
    getState() {
      return this.state;
    }
    getZip() {
      return this.zip;
    }
  }
  
  class Member{
      constructor(memberId,person){
          this.memberId=memberId,
          this.person=person;
      }
      getPerson(){
        return this.person
      }
      getMemberId(){
        return this.memberId;
      }
  }
  /**
   * Books class
   */
  class Book {
    /**
     *
     * @param {Number} bookId is bookId;
     * @param {String} title is title;
     * @param {Object} author is author;
     */
    constructor(bookId, title, author) {
      this.bookId = bookId;
      this.title = title;
      this.author = author;
    }
    setBookId(bookId) {
      this.bookId = bookId;
    }
    setTitle(title) {
      this.title = title;
    }
    setAuthor(author) {
      this.author = author;
    }
    getBookId() {
      return this.bookId;
    }
    getTitle() {
      return this.title;
    }
    getAuthor() {
      return this.author;
    }
  }
  /**
   * Login class
   */
//   class Login {
//     constructor(userName, password) {
//       this.userName = userName;
//       this.password = password;
//     }
//   }
  
  /**
   *
   * Librarian class
   */
  class Librarian {
    viewLibraryMember(memberId) {
      //will implemented
    }
    // recording data
    checkOutBook(memberId ,bookId) {
      //will implemented
    }
    // searchMember(memberId){
    //    //will implemented 
    // }
    //maximum check out length length 
    viewCheckOutStatus(memberId,bookId,checkOutdate,dueDate) {
      //will implemented
    }
    //returned dueDate
  }
  /**
   * Administrator class
   */
  class Administrator extends Librarian {
    addNewLibraryMember(newMember) {
      //will implemented
    }
    deleteMember(memberId){
        //will implemented
      }
   getNumberOfMember(){
         //will implemented
   }
    addNewBook(newBook) {
      //will implemented
    }
    addBookCopy(){
      //will implemented  
    }
    deleteBook(bookId){
      //will implemented
    }
    getNumberOfBook(){
    //will implemented
  }
  }
  /**
   * SuperAdmin class
   */
  class SuperAdmin extends Administrator{
  
  }
  
  function test() {
    let address = new Address("127Mathin luther king", "Boston", "MA", 2345);
    let person1 = new Person("Ezra", "Redda", "617-516-34562", address);
    let book1 = new Book(12345, "Introduction to java scripts", person1);
    let newMember=new Member(11111,person1)
   //return book1;
    return newMember;
  }
  let result = test();
  console.log(result);
}
libraryManagement()

