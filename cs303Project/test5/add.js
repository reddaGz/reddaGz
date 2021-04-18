window.onload=pageLoad

function pageLoad(){
    
   let but=document.getElementById("testButton")
   but.onclick=display
   function display(){
    let name=document.getElementById("inputValue").value

    let stu=new Student();
    alert(name)
    stu.addStudent(name)
     stu.getName()
   }
}

