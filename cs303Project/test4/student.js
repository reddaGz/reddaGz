const { Person } = require("./person");
const { Library } = require("./storage");
class Student extends Person{
    addStudent(name){
      Library.array.storage.push(name)
    }
    getName(store){
        alert(Library.array.storage[0])
    }
}
exports.Student = Student;