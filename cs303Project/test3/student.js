
class Student extends Person {//Person
constructor(id,name){
    super(name)
    this.id=id;
}
toString(){
    return super.toString()+" Id"+this.id
}
}