
function studentMemeber(){
    class Student{
        constructor(name){
            this.name=name
        }
    }
    let stu=new Student("Redda")
    return stu.name
}
console.log(studentMemeber())