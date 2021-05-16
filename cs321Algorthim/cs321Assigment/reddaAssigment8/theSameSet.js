const Sorts = require('./HW08-ArraySorter.js');

function theSameSet(A,B){
    if(A.length!==B.length) return false;
    let sort=new Sorts.ArraySorter();
    sort.PQSort(A)
    sort.PQSort(B)
  for(let i=0;i<A.length;i++){
      if(A[i]!=B[i]) 
      return false
  }
 return true 
}
let A= [1,4,3];
let B= [4,1,3];
console.log("expected true: "+ theSameSet(A,B))
let C=[9,1,3]
let D=[9,1,2]
console.log("expected false: "+ theSameSet(C,D))
