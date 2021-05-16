const List = require("./Sequence.js");
function sum(L){
  let s=  sumHelper(L,L.first())
  return s
}
function sumHelper(L,p){
 if(L.isLast())
   return L.element()
 else 
 return sumHelper(L,L.after(p))
}
