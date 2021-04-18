
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

// let array=[4,5,6,7]
//  console.log(array.findIndex((item)=>item===4)) 