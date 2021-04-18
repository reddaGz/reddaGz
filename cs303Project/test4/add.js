//window.onload=pageLoad
const { Student } = require("./student");
const { Library } = require("./storage");

let stu=new Student();
 stu.addStudent("Redda")
 stu.addStudent("Ezra")
console.log(Library.array.storage)

// let date=new Date();
// console.log(date.getDate())
// let dueDate=date+9;
// console.log(dueDate.getDate()+9)
// let arr=[4,5,6,7]
// let n=arr.find((item)=>item===17)
// console.log(n)

