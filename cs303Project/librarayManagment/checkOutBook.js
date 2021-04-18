function pageLoadCheckOut(){
 let super_admin=new SuperAdmin()
 let checkButton=document.getElementById("checkButton");
 let saveCheckOutButton=document.getElementById("saveCheckOut");
 let books=[];
 let members=[]
 load();
 function load(){
    for(let list of Library.arr.store){
        if(list instanceof Member){
            members.push(member)
        }
        if(list instanceof Book){
            books.push(list)
        }
    }
 }
    
    checkButton.onclick=checkMember;
    saveCheckOutButton.onclick=saveCheckOutBook;
    function saveCheckOutBook(){
      let fName=  document.getElementById("firstName").value 
      let lName=  document.getElementById("lastName").value
      if(fName===""||lName===""){
          alert(" check member first by click in check button ")
      }
     else{
        let bookId=document.getElementById("").value
        let memberId=document.getElementById("").value
        let book=books.find((item)=>item.bookId()===bookId)
        let memberInfo=members.find((item)=>item.getMemberId()===memberId)
        super_admin.checkOutBook(memberInfo,book)
      }
        
    }
    function checkMember(){
        let date=new Date()
        let year=date.getFullYear();
        let month=date.getMonth()+1;
        let day=date.getDate()
        let dateValue=year+"/"+month+"/"+day;
        let bookId=document.getElementById("").value
        let memberId=document.getElementById("").value
        let book=books.find((item)=>item.bookId()===bookId)
        let memberInfo=members.find((item)=>item.getMemberId()===memberId)
        if(memberInfo!==undefined){
            let firstName=memberInfo.getPerson().getFirstName();
            let lastName=memberInfo.getPerson().getLastName();
            document.getElementById("firstName").value=firstName 
            document.getElementById("lastName").value=lastName; 
            document.getElementById("").value= dateValue
        }else{
             alert("this is not member of the library")
        }
    }

}
function init(){
    window.onload=pageLoadCheckOut
}
init()