
function pageLoad(){
   let savePerson=document.getElementById("saveButton")
   let person=new PersonTest()
   savePerson.onclick=saveObject
   function saveObject(){
    let name= document.getElementById("inputValue").value
    let stu=new Student(1234,name)
    person.addStudent(stu)
    document.getElementById("result").value=person._perArray[0].toString()
   }
}

window.onload=pageLoad