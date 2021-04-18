
class Student extends Person{
    addStudent(name){
        Library.array.storage.push(name)
    }
    getName(){
        alert(Library.array.storage[0])
    }
}
