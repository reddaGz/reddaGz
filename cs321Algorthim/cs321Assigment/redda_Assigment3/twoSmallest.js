const { List } = require("./List")
function twoLargestValue(L){
    let p=L.first()
    let l1=p.element()
    let p1=L.after(p)
    let l2=p1.element()
    return helperTwoSmallest(L,L.after(p1),l1,l2)
}
function helperTwoSmallest(L,p,l1,l2){
    if(L.isLast(p)){
        if(p.element()<l1){
            l2=l1
            l1=p.element()  
        } else if(p.element()<l2){
            l2=p.element()
        }
    }
    else{
        if(p.element()<l1){
            l2=l1
            l1=p.element()  
        } else if(p.element()<l2){
            l2=p.element()
        }
      return  helperTwoSmallest(L,L.after(p),l1,l2) 
    }
    let result=[]
   result.push(l1)
   result.push(l2)
return result;     
}
let list=new List()
list.insertFirst(79)
list.insertFirst(78)
list.insertFirst(3)
list.insertFirst(3)
list.insertFirst(100)
list.insertFirst(3)
list.insertFirst(89)
list.insertFirst(89)
list.insertFirst(109)
list.insertFirst(2)
console.log(twoLargestValue(list)) //100,89