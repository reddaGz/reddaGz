const List = require("./Sequence.js");
/** sum using postion traversal */
function sum(L){
    return sumHelper(L,L.first())
}
function sumHelper(L,p){
    if(L.isLast(p)) return p.element()
    return p.element()+sumHelper(L,L.after(p))
}
/** sum using rank traversal loop */
// function sumRank(L){
//     let s=0;
//   for(let i=0;i<L.size();i++){
//        s+=L.elemAtRank(i)
//   }
//   return s;
// }
/** sum using rank traversal */
// function sum(L){
//     if(L.size()===0) return 0;  //O(1)
//     return sumHelper(L,0)       //O(n)
// }
// function sumHelper(L,i){      
//     if(i==L.size()) return 0      //O(n)
//     return L.elemAtRank(i)+sumHelper(L,i=i+1) //O(n)
// }

 let A = new List.Sequence();
 A.insertFirst(80);
 A.insertFirst(6);
 A.insertFirst(7);
 A.insertFirst(45);
 A.insertFirst(8);
 A.insertFirst(9);
 A.insertFirst(9);
 A.insertFirst(90);
 console.log(sum(A))
