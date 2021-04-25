const List = require("./Sequence.js");
/** Find maximum using Rank */
// function findMax(L){
//     if(L.size()===0) throw Error("empty list")
//     return findMaxHelper(L,1,L.elemAtRank(0))
// }
// function findMaxHelper(L,i,max){
//     if(i===L.size())
//         return max
//      else if(max<L.elemAtRank(i))
//         max=L.elemAtRank(i)
//      return findMaxHelper(L,i=i+1,max) 
//     }
/** Find maximum using postion */
 function findMax(L){
     let p=L.first()
    return findMaxHelper(L,L.after(p),p.element())
 }
 function findMaxHelper(L,p,max){
    if(L.isLast(p)) return max
    else if(p.element()>max)
          max=p.element();
    return findMaxHelper(L,L.after(p),max)
 }

    let A = new List.Sequence();
 A.insertFirst(80);
 A.insertFirst(6);
 A.insertFirst(7);
 A.insertFirst(45);
 A.insertFirst(8);
 A.insertFirst(9);
 A.insertFirst(9);
 A.insertFirst(90);
 console.log(findMax(A))
 //console.log(sumRank(A))