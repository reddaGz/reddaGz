class CheckOut{
    constructor(book,member){
        this.setBook(book)
        this.setMember(member)
    }
   setBook(book){
       this.book=book
   }
   setMember(member){
       this.member=member;
   } 
   getBook(){
       return this.book;
   }
   getMember(){
       return this.member
   }
}