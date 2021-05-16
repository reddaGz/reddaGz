const List = require("./Sequence.js");
function isSubset(A,B){
 let a=A.first();
 let b=B.first()
 while(!A.isLast(a)){
     if(!contains(B,a.element(),b))
         return false
    a=A.after(a)
 }
 if(!contains(B,a.element(),b))
     return false;
return true
}
function contains(list,e,p){
    if(e===p.element()) return true
    if(list.isLast(p)) return false
    return contains(list,e,list.after(p))
}
let A = new List.Sequence();
let B = new List.Sequence();
A.insertFirst(3);
A.insertFirst(6);
A.insertFirst(3);
B.insertFirst(3);
B.insertFirst(3);
B.insertFirst(6);
B.insertFirst(8);
console.log("expected true: "+isSubset(A,B))//A is subset of B
console.log("expected false: "+isSubset(B,A))//B is subset of A

