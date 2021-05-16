const { List } = require("./List")
function twoLargestValue(L){
    let result=[]
    let p=L.last()
    let l1=L.last().element()
     p=L.before(p)
    let   l2=p.element()
     l2= helperTwoLargest(L,p,l1,l2)
     result.push(l1)
     result.push(l2)
     return result;
}
function helperTwoLargest(L,p,l1,l2){
    if(L.isFirst(p)){
        l2=p.element();
        return l2;
    }else{
        l2=p.element();
     if(l1===l2){
      return helperTwoLargest(L,L.before(p),l1,l2) 
     }else return l2
    }
}
let list=new List()
list.insertFirst(79)
list.insertFirst(79)
list.insertFirst(79)
list.insertFirst(79)
list.insertFirst(79)
list.insertFirst(79)
list.insertFirst(71)
list.insertFirst(45)
list.insertFirst(40)
list.insertFirst(40)
list.insertFirst(40)
list.insertFirst(40)
list.insertFirst(100)

console.log(twoLargestValue(list)) //100,89