
function viewPageLoad(){
    let super_admin =new SuperAdmin()
    let m1Address=new Address("456 autiman street","Fairfield","IA",6789)
    let m2Address=new Address("459 burlington street","MAin","LA",1089)
    let m1=new Person("Gebre","Redda","617-516-5678","1989/05/23",m1Address) 
    let m2=new Person("Ezra","Kidus","617-516-6790","1999/11/12",m2Address) 
    let newMem=new Member("1002",m1)
    let newMem2=new Member("1001",m2)
    Library.arr.store.push(newMem)
    Library.arr.store.push(newMem2)
    let members=[];
    for(let member of Library.arr.store){
        if(member instanceof Member){
            members.push(member)
        }
    }
    let view_name=document.getElementById("showName")
    let searc_member=document.getElementById("searchMember")
    view_name.onclick=viewNameOfMember;
    searc_member.onclick=searchLibraryMember
  function viewNameOfMember(){
    super_admin.viewLibraryMemberName(members)
    
  }
  function searchLibraryMember(){
      super_admin.searchMember(members)
  }
}

function init(){
    window.onload=viewPageLoad
}
init();