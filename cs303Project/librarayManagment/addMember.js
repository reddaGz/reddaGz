function addMemberPageLoad() {
  addLibraryMember();
  
    /**
     * library member
     */
    function addLibraryMember() {
      let addMem = document.getElementById("addMemebr");
      let memberId = document.getElementById("memberId");
      let generateIdMember = document.getElementById("generateId");
      let super_admin = new SuperAdmin();
      let m1Address=new Address("456 autiman street","Fairfield","IA",6789)
      let m2Address=new Address("459 burlington street","MAin","LA",1089)
      let m1=new Person("Gebre","Redda","617-516-5678","1989/05/23",m1Address) 
      let m2=new Person("Ezra","Kidus","617-516-6790","1999/11/12",m2Address) 
      let newMem=new Member("1002",m1)
      let newMem2=new Member("1001",m2)
      Library.arr.store.push(newMem)
      Library.arr.store.push(newMem2)
      generateIdMember.onclick = generateMemberID;
      addMem.onclick=addMembers;
      function generateMemberID() {
          const minId = 1000;
          const maxId = 9999;
       let id = Math.floor(Math.random() * (maxId - minId) + minId) ;
       memberId.value = id;
     }
      function addMembers() {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let dob = document.getElementById("dateOfBirth").value;
        let phoneNum = document.getElementById("phoneNum").value;
        let street = document.getElementById("street").value;
        let state = document.getElementById("state").value;
        let city = document.getElementById("city").value;
        let zip = document.getElementById("zip").value;
        newMember()
        function newMember() {
          let personAddress = new Address(street, city, state, zip);
          let newPerson = new Person(
            firstName,
            lastName,
            phoneNum,
            new Date(dob),
            personAddress
          );
          let newMemebr = new Member(memberId, newPerson);
          super_admin.addNewLibraryMember(newMemebr);
          alert("added new new member");
           document.getElementById("firstName").value="";
           document.getElementById("lastName").value="";
           document.getElementById("dateOfBirth").value="";
           document.getElementById("phoneNum").value="";
           document.getElementById("street").value="";
           document.getElementById("state").value="";
           document.getElementById("city").value="";
           document.getElementById("zip").value="";
        }
      }
    }
  }
  
  window.onload = addMemberPageLoad;
  