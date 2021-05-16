const Sorts = require('./HW07-ArraySorter.js');
function isPermutation(A,B){
    if(A.length!==B.length) return false;
    let sort=new Sorts.ArraySorter();
    sort.heapSort(A)
    sort.heapSort(B)
    for(let i=0;i<A.length;i++){
        if(A[i]!==B[i])
          return false;
    }
    return true;
}
let A=[1,4,2]
let B=[4,1,2]
console.log("expected true: "+ isPermutation(A,B))
let C=[5,7,9,2]
let D=[2,9,7,3]
console.log("expected false: "+ isPermutation(C,D))
