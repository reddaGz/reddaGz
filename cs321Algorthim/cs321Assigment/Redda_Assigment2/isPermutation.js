const List = require("./Sequence.js");

function isPermutation(A, B) {
  if (A.size() !== B.size()) return false;
  for (let i = 0; i < A.size(); i++) {
    curA = A.elemAtRank(i);
    if (!contain(B, curA)) return false;
  }
  return true;
}
function contain(L, elem) {
  for (let j = 0; j < L.size(); j++) {
    curB = L.elemAtRank(j);
    if (elem == curB) return true;
  }
  return false;
}
// function contain(){

// }
/**
 * the first one is List ,sequnce
 * Algorthim recursivlly
 * Algorthim isPermutation(A,B)
 *   if(A.size()!=B.size())   1      1
 *      p:=A.first()          1      1
 *   while !A.isLast(p) do    n      n
 *      if( !containes(B,p.element()),B.first())  then   n*n  n*n
 *            return false     1      1
 *      p:=p.after(p)     1            n
 *  if( !containes(B,p.element(),N.first()))  then  n      n 
 *            return false    1         1
 *     return true     1            1   
 *   
 * 
 * Algorthim contains(B,elem,p) 
 *   if(elem===p.element())  then  n    n
 *       return true      1              1
 *   if(isLast(p))  then  n              n
 *        return elem===p.element  1      1
 
 *   return contains(B,elem,B.after(p))   n   n

 List Algorthim removeDuplication(A)  Sequnce
  1   p:=A.first()                      1
  n  while !A.isLast(p) do              n
  n*n     if containes(A.p.element,A.after(p))   n*n
  n           p:= A.after(p)1                       
  n           A.remove(A.before(p)))               n*n
        else
  n        p:=A.after(p)                             n
  1  return A;                                       1

 */
let A = new List.Sequence();
A.insertFirst(3);
A.insertFirst(6);
A.insertFirst(7);
A.insertFirst(8);
A.insertFirst(9);
let B = new List.Sequence();
B.insertFirst(9);
B.insertFirst(6);
B.insertFirst(3);
B.insertFirst(7);
B.insertFirst(8);
console.log(A.toString());
console.log(B.toString());
console.log("expected output is true");
console.log(isPermutation(A, B));
console.log("\n");
let C = new List.Sequence();
C.insertFirst(8);
C.insertFirst(2);
C.insertFirst(5);
let D = new List.Sequence();
D.insertFirst(5);
D.insertFirst(8);
D.insertFirst(3);
console.log("expected output is false");
console.log(isPermutation(C, D));
